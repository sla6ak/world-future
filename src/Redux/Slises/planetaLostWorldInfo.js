import { createSlice } from '@reduxjs/toolkit';

const initialЗlanetaBlueHomeInfo = {};

export const planetaBlueHomeInfo = createSlice({
  name: 'planetaBlueHome',
  initialState: initialЗlanetaBlueHomeInfo,
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
