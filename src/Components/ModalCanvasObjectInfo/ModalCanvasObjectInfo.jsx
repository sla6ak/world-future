// import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import React from 'react'
import { ModalInfo } from './ModalCanvasObjectInfo.styled'
// import { useSelector } from 'react-redux'

export const ModalCanvasObjectInfo = () => {
  // const { info } = useSelector((state) => state.openCanvasModal)
  // const { objects } = useSelector((state) => state.language.transleter)
  return (
    <ModalInfo>
      {/* <h3>{objects[info.typeObject].title}</h3> */}
      {/* {info?.distancion && (
        <p>
          {objects[info.typeObject].distancion}
          {info?.distancion > 10 ? ' 100 +' : info?.distancion}
        </p>
      )} */}
      {/* <p>{objects[info.typeObject].shortInfo}</p> */}
      <h1>modal</h1>
    </ModalInfo>
  )
}
