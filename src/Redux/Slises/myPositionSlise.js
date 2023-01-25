import { createSlice } from '@reduxjs/toolkit'

const initialmyPosition = {
  position: {
    x: 0,
    y: -1.0,
    z: 0
  },
  rotation: { x: 0, y: 0, z: 0 }
}

export const myPosition = createSlice({
  name: 'myPosition',
  initialState: initialmyPosition,
  reducers: {
    myPositionAction(_state, action) {
      return action.payload
    }
  }
})

export const { myPositionAction } = myPosition.actions
