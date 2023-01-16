import { createSlice } from '@reduxjs/toolkit';

const initialIsMult = false;

export const mult = createSlice({
  name: 'mult',
  initialState: initialIsMult,
  reducers: {
    isMult(_state, action) {
      return action.payload;
    },
  },
});

export const { isMult } = mult.actions;
