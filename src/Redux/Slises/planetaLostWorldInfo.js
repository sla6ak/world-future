import { createSlice } from '@reduxjs/toolkit';

const initialЗlanetaLostWorldInfo = { players: [{}] };

export const planetaLostWorldInfo = createSlice({
  name: 'planetaLostWorld',
  initialState: initialЗlanetaLostWorldInfo,
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
  planetaLostWorldInfo.actions;
