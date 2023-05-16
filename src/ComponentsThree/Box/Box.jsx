import { useLoader } from '@react-three/fiber' // frame это хук для анимаций
// import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import boxJpg from './box.jpg'
import boxJpgQ from './fds.jpg'
import { useBox } from '@react-three/cannon'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  newOpenCanvasModal,
  onHoverCanvasModal,
  ofHoverCanvasModal
} from 'Redux/Slices/openCanvasModalSlice'

const Box = ({ position, planet }) => {
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  const positionHero = useSelector((state) => state.myPosition.position)

  const textureBox = useLoader(TextureLoader, boxJpg)
  const textureBoxQ = useLoader(TextureLoader, boxJpgQ)
  const [refBox] = useBox(() => ({
    mass: 1,
    position
  }))

  const onClickObj = () => {
    const distance = refBox.current.position.distanceTo(positionHero)
    if (distance > 5) return
    dispatch(
      newOpenCanvasModal({
        isClick: true,
        isHover: false,
        typeObject: 'box',
        position: {},
        distance,
        timerOpen: 5000
      })
    )
    setActive(!active)
  }
  const onHoverObj = () => {
    const distance = refBox.current.position.distanceTo(positionHero)
    setHover(true)
    dispatch(
      onHoverCanvasModal({
        isClick: false,
        typeObject: 'box',
        isHover: true,
        position: {},
        distance
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
    <mesh
      ref={refBox}
      scale={hovered ? 0.6 : 0.5}
      onPointerDown={(e) => {
        onClickObj()
      }}
      onPointerEnter={(e) => {
        onHoverObj()
      }}
      onPointerOut={(e) => {
        offHoverObj()
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={active ? textureBox : textureBoxQ} />
    </mesh>
  )
}

export default Box
