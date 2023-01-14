import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './ModalSettings.styled';
import { WrapperButtons } from './ModalSettings.styled';

export const ModalSettings = ({ onModalClose }) => {
  const mouseDownClouse = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  return createPortal(
    <Overlay>
      <ModalWindow>
        <WrapperButtons>
          <GeneralButton bts="" onClick={mouseDownClouse}>
            ПРОДОЛЖИТЬ
          </GeneralButton>
          <GeneralButton onClick={() => {}}>ЯЗЫКИ</GeneralButton>
          <GeneralButton onClick={() => {}}>ЗВУК</GeneralButton>
          <GeneralButton onClick={() => {}}>ВИДЕО</GeneralButton>
          <GeneralButton onClick={() => {}}>ПОКИНУТЬ ИГРУ</GeneralButton>
        </WrapperButtons>
      </ModalWindow>
    </Overlay>,
    document.querySelector('#modal')
  );
};
