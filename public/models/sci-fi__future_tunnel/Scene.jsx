/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 scene.gltf
Author: nenkea (https://sketchfab.com/nenkea)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sci-fi-future-tunnel-07bdc493060c49d4b860e919fc2c47f0
Title: Sci-Fi / Future Tunnel
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={4}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={2.79}>
            <mesh geometry={nodes.Cube_Main_0.geometry} material={materials.Main} />
            <mesh geometry={nodes.Cube_Beton_0.geometry} material={materials.Beton} />
            <mesh geometry={nodes.Cube_Asphalt_0.geometry} material={materials.Asphalt} />
            <mesh geometry={nodes.Cube_Klarer_Beton_0.geometry} material={materials.Klarer_Beton} />
            <mesh geometry={nodes.Cube_Ganzstein_Schwarz_0.geometry} material={materials.Ganzstein_Schwarz} />
            <mesh geometry={nodes.Cube_Metall_Dunkelbalu_0.geometry} material={materials.Metall_Dunkelbalu} />
            <mesh geometry={nodes.Cube_Glas_0.geometry} material={materials.Glas} />
            <mesh geometry={nodes.Cube_Beton_mit_Rillen_Bogen_0.geometry} material={materials.Beton_mit_Rillen_Bogen} />
            <mesh geometry={nodes.Cube_Wandlichterhalter_0.geometry} material={materials.Wandlichterhalter} />
            <mesh geometry={nodes.Cube_Wandlichter_0.geometry} material={materials.Wandlichter} />
            <mesh geometry={nodes.Cube_Rand_0.geometry} material={materials.Rand} />
            <mesh geometry={nodes.Cube_Streifen_0.geometry} material={materials.Streifen} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
