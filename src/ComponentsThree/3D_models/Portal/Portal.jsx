import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  newOpenCanvasModal,
  onHoverCanvasModal,
  ofHoverCanvasModal
} from 'Redux/Slices/openCanvasModalSlice'

const Portal = ({ position, planet }) => {
  const positionHero = useSelector((state) => state.myPosition.position)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  const group = useRef()
  const refBox = useRef()

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
        <mesh ref={refBox}>
          <sphereGeometry args={[20, 20, 20]} />
          <meshStandardMaterial color="#55c" />
        </mesh>
      </group>
    </group>
  )
}

export default Portal
