import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import React from 'react';
import { ModalInfo, MoreInfo, ShortInfo } from './ModalCanvasClicInfo.styled';
import { WrapperButtons } from './ModalCanvasClicInfo.styled';
import { useSelector } from 'react-redux';
import { useModalClickKeyboardControls } from './useModalClickKeyboardControls';

export const ModalCanvasClicInfo = () => {
  const { openCanvasModal } = useSelector(state => state);
  const { lordInfo } = useSelector(state => state);
  useModalClickKeyboardControls();
  return (
    <ModalInfo>
      <h3>{openCanvasModal.info?.title}</h3>
      <ShortInfo>{openCanvasModal.info?.shortInfo}</ShortInfo>
      <MoreInfo>{openCanvasModal.info?.moreInfo}</MoreInfo>
      {openCanvasModal.typeObj === 'portal' && (
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
  );
};
