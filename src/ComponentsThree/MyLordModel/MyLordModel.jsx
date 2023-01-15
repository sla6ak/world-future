// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import LordGLB from '../../models/LordModel.glb';
import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Vector3 } from 'three';
import { useEffect } from 'react';
import { PointerCameraController } from 'ComponentsThree/CameraController/CameraController';
import { useSphere } from '@react-three/cannon';
import { useLordKeyboardControls } from 'Hooks/useLordKeyboardControls';
import { Suspense } from 'react';

const SPEED = 3;

const MyLordModel = props => {
  const { moveForward, moveBackward, moveLeft, moveRight, jump } =
    useLordKeyboardControls();
  const { camera } = useThree();
  // const result = useLoader(GLTFLoader, LordGLB);
  const [ref, api] = useSphere(() => ({
    type: 'Dynamic',
    mass: 1,
    position: [0, 0, 0],
    matrixAutoUpdate: true,
    scale: [2, 2, 2],
    ...props,
  }));
  const velocity = useRef([0, 0, 0]); //скорость с сілкой на вектор центра карті

  useEffect(() => {
    const unsubscribeHero = api.velocity.subscribe(v => (velocity.current = v));
    return unsubscribeHero;
  }, [api.velocity, camera.position]);

  useEffect(() => {
    const unsubscribeCamera = api.position.subscribe(v => {
      camera.position.copy({ x: v[0], y: v[1], z: v[2] });
      return unsubscribeCamera;
    });
  }, [api.position, camera.position]);
  useFrame(() => {
    // создадим векторы управляющие камерой и героем
    const direction = new Vector3();
    // этот вектор будет плюсовать по шагу за тик к лорду
    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );
    // этот вектор должен двигатся боком
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    );
    // итоговый вектор высчитывается из разности настоящего и следующего вектора
    // с учетом скорости и изменением направления камеры(тоесть базового направления сторон)
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);
    api.velocity.set(direction.x, velocity.current[1], direction.z);
    // эту сложную матиматическую фомулу ниже я не смог осмыслить поэтому скопипастил из интернета бросил в консоль апи.велосите.курент еррор но пріжки срабатівают
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
      api.velocity.set(velocity.current[0], 8, velocity.current[2]);
    }
  });
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
  );
};
export default MyLordModel;
