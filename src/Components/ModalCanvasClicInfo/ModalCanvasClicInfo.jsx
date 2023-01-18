// import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import React from 'react';
import { ModalInfo } from './ModalCanvasClicInfo.styled';
// import { WrapperButtons } from './ModalCanvasLord.styled';
import { useSelector } from 'react-redux';

export const ModalCanvasClicInfo = () => {
  const { info } = useSelector(state => state.openCanvasModal);
  return (
    <ModalInfo>
      <h3>{info?.title}</h3>
      <p>{info?.shortInfo}</p>
      <p>{info?.moreInfo}</p>
      {/* <WrapperButtons>
        <GeneralButton onClick={() => {}}>Написать</GeneralButton>
        <GeneralButton onClick={() => {}}>Атаковать</GeneralButton>
      </WrapperButtons> */}
    </ModalInfo>
  );
};
