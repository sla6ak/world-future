import { createSlice } from '@reduxjs/toolkit';

const initialPlanetaBlueHomeInfo = {
  players: [{ nikName: '', position: { x: 10, y: -2, z: 8 } }],
};

export const planetaBlueHomeInfo = createSlice({
  name: 'planetaBlueHome',
  initialState: initialPlanetaBlueHomeInfo,
  reducers: {
    statePlayersAction(_state, action) {
      return action.payload;
    },
    stateCristalsAction(_state, _action) {
      return;
    },
    stateAnomalsAction(_state, _action) {
      return;
    },
  },
});

export const { statePlayersAction, stateCristalsAction, stateAnomalsAction } =
  planetaBlueHomeInfo.actions;
