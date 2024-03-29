import { createSlice } from '@reduxjs/toolkit'
// статус определяет рендерить модалку или нет тип определяет какую модалку встроить как взаимодействовать таймер закроет модалку автоматически инфо это стандартные поля для модалки title, ... позиция модалки должна определить где именно модалку отренднрить
const initialData = {
  isClick: false,
  isHover: false,
  typeObject: null,
  position: {},
  distance: null,
  timerOpen: 0
}
// typeObject определяет наличие кнопок или взаимодействий ["history","user","kristall",'portal']

export const openCanvasModal = createSlice({
  name: 'canvasModal',
  initialState: initialData,
  reducers: {
    newOpenCanvasModal(_state, action) {
      return action.payload
    },
    onHoverCanvasModal(state, action) {
      return { ...state, ...action.payload }
    },
    ofHoverCanvasModal(state, action) {
      return { ...state, ...action.payload }
    },
    closeCanvasModal(_state, _action) {
      return { ...initialData }
    }
  }
})

export const {
  newOpenCanvasModal,
  ofHoverCanvasModal,
  onHoverCanvasModal,
  closeCanvasModal
} = openCanvasModal.actions
