import { createSlice } from '@reduxjs/toolkit'

const initialBlueHomeInfo = {
  players: {
    nikName: {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 }
    }
  },
  cristals: {},
  anomals: {}
}

export const BlueHomeInfo = createSlice({
  name: 'BlueHome',
  initialState: initialBlueHomeInfo,
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
  BlueHomeInfo.actions
