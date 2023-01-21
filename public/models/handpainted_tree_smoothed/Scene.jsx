/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 scene.gltf
Author: Kafu Dev (https://sketchfab.com/kafutschga)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/handpainted-tree-smoothed-01c8163a33e34b2c99171b10c5f99197
Title: Handpainted Tree [Smoothed]
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Plane011_Material_#2_0'].geometry} material={materials.Material_2} position={[98.26, 15.56, 272.9]} rotation={[0, 0.89, 0]} scale={[1.17, 0.97, 1.17]} />
      <mesh geometry={nodes['Plane012_Material_#3_0'].geometry} material={materials.Material_3} position={[95.99, 32.46, 272.94]} rotation={[-1.82, 0, 0]} scale={1.78} />
      <mesh geometry={nodes['Plane013_Material_#3_0'].geometry} material={materials.Material_3} position={[95.99, 30.43, 273.34]} rotation={[-1.32, 0, 0]} scale={1.54} />
      <mesh geometry={nodes['Plane014_Material_#3_0'].geometry} material={materials.Material_3} position={[95.04, 30.25, 271.14]} rotation={[-1.49, 0.23, -1.92]} scale={1.44} />
      <mesh geometry={nodes['Plane015_Material_#3_0'].geometry} material={materials.Material_3} position={[95.04, 28.62, 271.46]} rotation={[-1.65, -0.23, -1.92]} scale={1.24} />
      <mesh geometry={nodes['Plane016_Material_#3_0'].geometry} material={materials.Material_3} position={[95.45, 24.98, 278.78]} rotation={[-0.58, 0.55, -1.82]} scale={1.17} />
      <mesh geometry={nodes['Plane017_Material_#3_0'].geometry} material={materials.Material_3} position={[95.45, 23.65, 279.04]} rotation={[-0.7, 0.06, -1.78]} scale={1.01} />
      <mesh geometry={nodes['Plane018_Material_#3_0'].geometry} material={materials.Material_3} position={[94.83, 23.53, 277.61]} rotation={[-0.43, 0.17, 2.54]} scale={0.94} />
      <mesh geometry={nodes['Plane019_Material_#3_0'].geometry} material={materials.Material_3} position={[94.83, 22.46, 277.82]} rotation={[-0.88, 0.43, 2.67]} scale={0.81} />
      <mesh geometry={nodes['Plane020_Material_#3_0'].geometry} material={materials.Material_3} position={[90.06, 17.69, 266.32]} rotation={[-2.26, -0.22, -0.63]} scale={1.32} />
      <mesh geometry={nodes['Plane021_Material_#3_0'].geometry} material={materials.Material_3} position={[90.06, 16.18, 266.62]} rotation={[-1.81, -0.49, -0.48]} scale={1.15} />
      <mesh geometry={nodes['Plane022_Material_#3_0'].geometry} material={materials.Material_3} position={[89.36, 16.05, 264.99]} rotation={[-1.85, -0.2, -2.42]} scale={1.07} />
      <mesh geometry={nodes['Plane023_Material_#3_0'].geometry} material={materials.Material_3} position={[89.36, 14.83, 265.22]} rotation={[-2.27, -0.51, -2.57]} scale={0.92} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
