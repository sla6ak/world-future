import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { BackSide } from 'three'

const CosmosBox = ({ textureCosmos }) => {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x += 0.00026
    ref.current.rotation.y += 0.0004
  }, [])

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[500, 500, 500]} />
      <meshStandardMaterial map={textureCosmos} side={BackSide} fog={true} />
    </mesh>
  )
}

export default CosmosBox
