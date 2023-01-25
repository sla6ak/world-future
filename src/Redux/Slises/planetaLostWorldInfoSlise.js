import { createSlice } from '@reduxjs/toolkit'

const initialLostWorldInfo = {
  players: [{ nikName: '', position: { x: 10, y: -2, z: 8 }, rotation: {} }]
}

export const LostWorldInfo = createSlice({
  name: 'LostWorld',
  initialState: initialLostWorldInfo,
  reducers: {
    statePlayersAction(_state, _action) {},
    stateCristalsAction(_state, _action) {},
    stateAnomalsAction(_state, _action) {}
  }
})

export const { statePlayersAction, stateCristalsAction, stateAnomalsAction } =
  LostWorldInfo.actions
