import { createSlice } from '@reduxjs/toolkit'

const initialYellowHomeInfo = {
  players: { nikName: { position: { x: 10, y: -2, z: 8 } } }
}

export const YellowHomeInfo = createSlice({
  name: 'YellowHome',
  initialState: initialYellowHomeInfo,
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
  YellowHomeInfo.actions
