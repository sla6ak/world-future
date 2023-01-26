import React, { useRef, useState } from 'react'
// import { useState } from 'react';
import { useGLTF } from '@react-three/drei'
import { useDispatch, useSelector } from 'react-redux'
import {
  newOpenCanvasModal,
  onHoverCanvasModal,
  ofHoverCanvasModal
} from 'Redux/Slises/openCanvasModalSlise'

const Portal = ({ position, planet }) => {
  const positionHero = useSelector((state) => state.myPosition.position)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/time_machine/scene.gltf')

  const onClickObj = () => {
    const distance = group.current.position.distanceTo(positionHero)
    if (distance > 10) return
    dispatch(
      newOpenCanvasModal({
        isClick: true,
        isHover: false,
        position: {},
        distance,
        typeObject: 'portal',
        timerOpen: 15000
      })
    )
    setActive(!active)
  }
  const onHoverObj = () => {
    const distance = group.current.position.distanceTo(positionHero)
    setHover(true)
    dispatch(
      onHoverCanvasModal({
        isClick: false,
        isHover: true,
        typeObject: 'portal',
        distance,
        position: {}
      })
    )
    setActive(!active)
  }
  const offHoverObj = () => {
    setHover(false)
    dispatch(
      ofHoverCanvasModal({
        isHover: false
      })
    )
    setActive(!active)
  }

  return (
    <group
      ref={group}
      onPointerDown={(e) => {
        onClickObj()
      }}
      onPointerEnter={(e) => {
        onHoverObj()
      }}
      onPointerOut={(e) => {
        offHoverObj()
      }}
      dispose={null}
      scale={hovered ? 0.102 : 0.1}
      position={position}
    >
      <directionalLight color="#1d68f3" />
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials['Scene_-_Root']}
          material-color={'#5a89a5'}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials['Scene_-_Root']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/time_machine/scene.gltf')

export default Portal
