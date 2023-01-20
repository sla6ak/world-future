import { createSlice } from '@reduxjs/toolkit';

const initialStatusWS = false;

export const statusWS = createSlice({
  name: 'statusWS',
  initialState: initialStatusWS,
  reducers: {
    isWsConnect(_state, action) {
      return action.payload;
    },
  },
});

export const { isWsConnect } = statusWS.actions;
