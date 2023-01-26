import { createSlice } from '@reduxjs/toolkit'

const initialLostWorldInfo = {
  players: [{ nikName: '', position: { x: 10, y: -2, z: 8 }, rotation: {} }]
}

export const LostWorldInfo = createSlice({
  name: 'LostWorld',
  initialState: initialLostWorldInfo,
  reducers: {
    statePlanetAction(_state, action) {
      return action.payload
    },
    stateCristalsAction(_state, action) {
      return action.payload
    },
    stateAnomalsAction(_state, action) {
      return action.payload
    }
  }
})

export const { statePlanetAction, stateCristalsAction, stateAnomalsAction } =
  LostWorldInfo.actions
