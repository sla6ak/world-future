import { createSlice } from '@reduxjs/toolkit'

const initialplanetaYellowHomeInfo = {
  players: [{ nikName: '', position: { x: 10, y: -2, z: 8 } }]
}

export const planetaYellowHomeInfo = createSlice({
  name: 'planetaYellowHome',
  initialState: initialplanetaYellowHomeInfo,
  reducers: {
    statePlayersAction(_state, _action) {

    },
    stateCristalsAction(_state, _action) {

    },
    stateAnomalsAction(_state, _action) {

    }
  }
})

export const { statePlayersAction, stateCristalsAction, stateAnomalsAction } =
  planetaYellowHomeInfo.actions
