import { GeneralButton } from 'Components/GeneralButton/GeneralButton.styled';
import React, { useEffect } from 'react';
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
          <GeneralButton bts="" onClick={onModalClose}>
            ПРОДОЛЖИТЬ
          </GeneralButton>
          <GeneralButton>ЯЗЫКИ</GeneralButton>
          <GeneralButton>ЗВУК</GeneralButton>
          <GeneralButton>ВИДЕО</GeneralButton>
          <GeneralButton>ПОКИНУТЬ ИГРУ</GeneralButton>
        </WrapperButtons>
      </ModalWindow>
    </Overlay>,
    document.querySelector('#modal')
  );
};
