// import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import React from 'react'
import { ModalInfo } from './ModalCanvasObjectInfo.styled'
import { useSelector } from 'react-redux'

export const ModalCanvasObjectInfo = () => {
  const { info } = useSelector(state => state.openCanvasModal)
  return (
    <ModalInfo>
      <h3>{info?.title}</h3>
      <p>{info?.shortInfo}</p>
    </ModalInfo>
  )
}
