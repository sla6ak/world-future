import { createSlice } from '@reduxjs/toolkit';
// статус определяет рендерить модалку или нет тип определяет какую модалку встроить как взаимодействовать таймер закроет модалку автоматически инфо это стандартные поля для модалки title, ... позиция модалки должна определить где именно модалку отренднрить
const initialCanvasModal = {
  isClick: false,
  isHover: false,
  typeObj: null,
  ObjPosition: {},
  timerOpen: 0,
  info: { title: '', typeObj: '', shortInfo: '', moreInfo: '' },
};
// typeObj определяет наличие кнопок или взаимодействий ["history","user","kristall",'portal']

export const openCanvasModal = createSlice({
  name: 'canvasModal',
  initialState: initialCanvasModal,
  reducers: {
    newOpenCanvasModal(_state, action) {
      return action.payload;
    },
    onHoverCanvasModal(state, action) {
      return { ...state, ...action.payload };
    },
    ofHoverCanvasModal(state, action) {
      return { ...state, ...action.payload };
    },
    closeCanvasModal(_state, _action) {
      return { ...initialCanvasModal };
    },
  },
});

export const {
  newOpenCanvasModal,
  ofHoverCanvasModal,
  onHoverCanvasModal,
  closeCanvasModal,
} = openCanvasModal.actions;
