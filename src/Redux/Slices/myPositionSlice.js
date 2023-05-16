import { createSlice } from '@reduxjs/toolkit'

const initialData = {
  position: {
    x: 0,
    y: -1.0,
    z: 0
  },
  rotation: { x: 0, y: 0, z: 0 }
}

export const myPosition = createSlice({
  name: 'myPosition',
  initialState: initialData,
  reducers: {
    myPositionAction(_state, action) {
      return action.payload
    }
  }
})

export const { myPositionAction } = myPosition.actions
