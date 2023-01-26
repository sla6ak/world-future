// import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import React from 'react'
import {
  ModalInfo,
  DistanceInfo,
  ShortInfo
} from './ModalCanvasObjectInfo.styled'
import { useSelector } from 'react-redux'

export const ModalCanvasObjectInfo = () => {
  const { openCanvasModal } = useSelector((state) => state)
  const { objects } = useSelector((state) => state.language.transleter)
  return (
    <ModalInfo>
      <h2>{objects[openCanvasModal.typeObject].title}</h2>
      {openCanvasModal?.distance && (
        <DistanceInfo>
          {objects[openCanvasModal.typeObject].distance}
          {openCanvasModal?.distance > 100
            ? ' 100 +'
            : openCanvasModal?.distance.toFixed(0)}
        </DistanceInfo>
      )}
      <ShortInfo>{objects[openCanvasModal.typeObject].shortInfo}</ShortInfo>
    </ModalInfo>
  )
}
