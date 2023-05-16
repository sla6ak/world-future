import { createSlice } from '@reduxjs/toolkit'

const initialData = {
  players: [{ nikName: '', position: { x: 10, y: -2, z: 8 }, rotation: {} }],
  crystals: {},
  anomaly: {}
}

export const LostWorldInfo = createSlice({
  name: 'LostWorld',
  initialState: initialData,
  reducers: {
    statePlanetAction(_state, action) {
      return action.payload
    },
    stateCrystalsAction(_state, action) {
      return action.payload
    },
    stateAnomalyAction(_state, action) {
      return action.payload
    }
  }
})

export const { statePlanetAction, stateCrystalsAction, stateAnomalyAction } =
  LostWorldInfo.actions
