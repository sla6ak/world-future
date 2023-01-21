import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { BackSide } from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const CosmosBox = ({ CosmosSpace }) => {
  const textureCosmos = useLoader(TextureLoader, CosmosSpace)
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x += 0.00026
    ref.current.rotation.y += 0.0004
  }, [])

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[1000, 1000, 1000]} />
      <meshStandardMaterial map={textureCosmos} side={BackSide} fog={true} />
    </mesh>
  )
}

export default CosmosBox
