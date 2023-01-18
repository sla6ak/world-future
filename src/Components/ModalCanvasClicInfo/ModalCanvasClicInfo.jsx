import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import React from 'react';
import { ModalInfo, MoreInfo, ShortInfo } from './ModalCanvasClicInfo.styled';
import { WrapperButtons } from './ModalCanvasClicInfo.styled';
import { useSelector } from 'react-redux';

export const ModalCanvasClicInfo = () => {
  const { openCanvasModal } = useSelector(state => state);
  return (
    <ModalInfo>
      <h3>{openCanvasModal.info?.title}</h3>
      <ShortInfo>{openCanvasModal.info?.shortInfo}</ShortInfo>
      <MoreInfo>{openCanvasModal.info?.moreInfo}</MoreInfo>
      {openCanvasModal.typeObj === 'portal' && (
        <>
          <WrapperButtons>
            <GeneralButton onClick={() => {}}>Open the gate (G)</GeneralButton>
          </WrapperButtons>
        </>
      )}
    </ModalInfo>
  );
};
