import { createSlice } from '@reduxjs/toolkit'

const initialplanetaLostWorldInfo = {
  players: [{ nikName: '', position: { x: 10, y: -2, z: 8 } }]
}

export const planetaLostWorldInfo = createSlice({
  name: 'planetaLostWorld',
  initialState: initialplanetaLostWorldInfo,
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
  planetaLostWorldInfo.actions
