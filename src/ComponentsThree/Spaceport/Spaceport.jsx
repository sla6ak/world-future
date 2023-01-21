import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Spaceport = ({ props }) => {
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // const result = useLoader(GLTFLoader, modelSpaceshipGLTF);
  const refGroup = useRef()
  const { nodes, materials } = useGLTF('/models/space_ship/scene.gltf')

  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    refGroup.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    // refGroup.current.position.y = refGroup.current.position.y + t / 100;
    refGroup.current.rotation.x = Math.cos(t / 4) / 8
    refGroup.current.rotation.y = Math.sin(t / 4) / 8
    refGroup.current.position.y = (1 + Math.sin(t / 4.5)) * 50
  })

  return (
    <group
      scale={hovered ? 0.9 : 0.7}
      ref={refGroup}
      {...props}
      dispose={null}
      onPointerDown={(e) => setActive(!active)}
      onPointerEnter={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials['03_-_Default']}
              material-color={active ? '#80f0ea' : '#008eb9'}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/space_ship/scene.gltf')
export default Spaceport
