import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled'
import React from 'react'
import {
  ModalInfo,
  MoreInfo,
  ShortInfo,
  WrapperButtons
} from './ModalCanvasClicInfo.styled'
import { useSelector } from 'react-redux'
import { useModalClickKeyboardControls } from '../../Hooks/useModalClickKeyboardControls'

export const ModalCanvasClicInfo = () => {
  const { openCanvasModal, lordInfo } = useSelector((state) => state)
  const { objects } = useSelector((state) => state.language.transleter)
  useModalClickKeyboardControls()
  return (
    <ModalInfo>
      <h3>{objects[openCanvasModal.typeObject].title}</h3>
      <ShortInfo>{objects[openCanvasModal.typeObject].shortInfo}</ShortInfo>
      <MoreInfo>{objects[openCanvasModal.typeObject].moreInfo}</MoreInfo>
      {openCanvasModal.typeObject === 'portal' && (
        <>
          <WrapperButtons>
            {lordInfo.planet === 'BlueHome' ||
            lordInfo.planet === 'YellowHome' ? (
              <GeneralButton onClick={() => {}}>To LostWorld (G)</GeneralButton>
            ) : (
              <GeneralButton onClick={() => {}}>To Home (H)</GeneralButton>
            )}
          </WrapperButtons>
        </>
      )}
    </ModalInfo>
  )
}
