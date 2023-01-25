import { createSlice } from '@reduxjs/toolkit'

const initialBlueHomeInfo = {
  players: [{ nikName: '', position: { x: 10, y: -2, z: 8 } }]
}

export const BlueHomeInfo = createSlice({
  name: 'BlueHome',
  initialState: initialBlueHomeInfo,
  reducers: {
    statePlayersAction(_state, action) {
      return action.payload
    },
    stateCristalsAction(_state, _action) {},
    stateAnomalsAction(_state, _action) {}
  }
})

export const { statePlayersAction, stateCristalsAction, stateAnomalsAction } =
  BlueHomeInfo.actions
