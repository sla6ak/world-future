import { useLoader, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Star = ({ position, reSize, starImg }) => {
  let textureStar
  if (starImg) {
    textureStar = useLoader(TextureLoader, starImg)
  }
  const refBox = useRef()

  useFrame(() => {
    // refBox.current.rotation.x += 0.03;
    refBox.current.rotation.y += 0.01
  }, 1)

  return (
    <>
      {starImg && (
        <>
          <directionalLight
            color="#dab89d"
            intensity={2}
            position={[
              -position[0] - 200,
              -position[1] - 100,
              -position[2] - 200
            ]}
          />{' '}
        </>
      )}
      <mesh position={position} ref={refBox}>
        <sphereGeometry args={reSize} />
        {!starImg ? (
          <meshStandardMaterial color={'black'} />
        ) : (
          <>
            <meshStandardMaterial map={textureStar} />
            <pointLight color="#e7ff7b" intensity={3} />
          </>
        )}
      </mesh>
    </>
  )
}

export default Star
