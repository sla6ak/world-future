import { createSlice } from '@reduxjs/toolkit'

const initialData = {
  players: [
    {
      nikName: '',
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 }
    }
  ],
  crystals: {},
  anomaly: {}
}

export const BlueHomeInfo = createSlice({
  name: 'BlueHome',
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
  BlueHomeInfo.actions
