import { createSlice } from '@reduxjs/toolkit';

const initialPlanetaBlueHomeInfo = {};

export const planetaBlueHomeInfo = createSlice({
  name: 'planetaBlueHome',
  initialState: initialPlanetaBlueHomeInfo,
  reducers: {
    statePlayersAction(_state, _action) {
      return;
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
