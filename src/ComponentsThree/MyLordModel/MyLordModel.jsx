import { useThree, useFrame } from '@react-three/fiber'
import React, { useRef, useEffect, Suspense, useState } from 'react'
import { Vector3 } from 'three'
import { PointerCameraController } from 'ComponentsThree/CameraController/CameraController'
import { useSphere } from '@react-three/cannon'
import { useLordKeyboardControls } from 'Hooks/useLordKeyboardControls'
import { useOpenModalCanvasEl } from 'Hooks/useOpenModalCanvasEl'
import { useDispatch } from 'react-redux'
import { myPositionAction } from 'Redux/Slises/myPositionSlise'
import { useMyPositionHook } from 'Hooks/useMyPositionHook'
// чтоб было чесно нам нужно нашего лорда отрисовывать по ответным данным с сервера а не по локальным. для начала передадим на сервер нашу позицию
const SPEED = 3
const MyLordModel = (props) => {
  const { moveForward, moveBackward, moveLeft, moveRight, jump } =
    useLordKeyboardControls()
  useOpenModalCanvasEl()
  useMyPositionHook()
  const { camera } = useThree()
  const [speed, setSpeed] = useState(10)
  const dispatch = useDispatch()

  // const result = useLoader(GLTFLoader, LordGLB);
  const [ref, api] = useSphere(() => ({
    type: 'Dynamic',
    mass: 1,
    position: [0, 0, 0],
    matrixAutoUpdate: true,
    scale: [2, 2, 2],
    ...props
  }))
  const velocity = useRef([0, 0, 0]) // скорость с сілкой на вектор центра карті
  const centrMap = new Vector3()
  useEffect(() => {
    const unsubscribeHero = api.velocity.subscribe((v) => {
      return (velocity.current = v)
    })
    return unsubscribeHero
  }, [api.velocity])

  useEffect(() => {
    const unsubscribeCamera = api.position.subscribe((v) => {
      const vx = v[0].toFixed(3)
      const vy = v[1].toFixed(3)
      const vz = v[2].toFixed(3)
      if (
        camera.position.x.toFixed(3) !== vx ||
        camera.position.y.toFixed(3) !== vy ||
        camera.position.z.toFixed(3) !== vz
      ) {
        const positionShort = { x: v[0], y: v[1], z: v[2] }
        const rotationShort = {
          x: camera.rotation._x,
          y: camera.rotation._y,
          z: camera.rotation._z
        }
        const distancia = camera.position.distanceTo(centrMap)
        const speedResult = (distancia) => {
          if (distancia > 350) {
            return 0.00000000001
          }
          const result =
            SPEED / (1 + distancia * (1 + distancia) * (1 + distancia) * 0.0001)
          // console.log('distancia:', distancia, 'speed:', result)
          return result
        }
        setSpeed((prev) => speedResult(distancia))
        camera.position.copy(positionShort)
        dispatch(
          myPositionAction({
            position: positionShort,
            rotation: rotationShort
          })
        )
      }
      return unsubscribeCamera
    })
  }, [api.position, camera.position])

  useFrame(() => {
    // создадим векторы управляющие камерой и героем
    const direction = new Vector3()
    // этот вектор будет плюсовать по шагу за тик к лорду
    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    )
    // этот вектор должен двигатся боком
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    )
    // итоговый вектор высчитывается из разности настоящего и следующего вектора
    // с учетом скорости и изменением направления камеры(тоесть базового направления сторон)
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed)
      .applyEuler(camera.rotation)
    api.velocity.set(direction.x, velocity.current[1], direction.z)
    // эту сложную матиматическую фомулу ниже я не смог осмыслить поэтому скопипастил из интернета бросил в консоль апи.велосите.курент еррор но пріжки срабатівают
    if (jump && Math.abs(velocity.current[1].toFixed(3)) < 0.05) {
      api.velocity.set(velocity.current[0], 8, velocity.current[2])
    }
  })
  // console.log(velocity.current);
  return (
    <>
      <Suspense fallback={null}>
        <PointerCameraController />
        <mesh scale={5} ref={ref}>
          {/* <primitive object={result.scene} /> */}
        </mesh>
      </Suspense>
    </>
  )
}
export default MyLordModel
