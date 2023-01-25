import { createSlice } from '@reduxjs/toolkit'

const initialYellowHomeInfo = {
  players: [{ nikName: '', position: { x: 10, y: -2, z: 8 } }]
}

export const YellowHomeInfo = createSlice({
  name: 'YellowHome',
  initialState: initialYellowHomeInfo,
  reducers: {
    statePlayersAction(_state, _action) {},
    stateCristalsAction(_state, _action) {},
    stateAnomalsAction(_state, _action) {}
  }
})

export const { statePlayersAction, stateCristalsAction, stateAnomalsAction } =
  YellowHomeInfo.actions
