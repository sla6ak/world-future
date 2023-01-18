import React from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow } from './ModalCanvasWrapper.styled';

export const ModalCanvasWpapper = ({ children }) => {
  return createPortal(
    <ModalWindow>{children}</ModalWindow>,
    document.querySelector('#modalcanvaswrapper')
  );
};
