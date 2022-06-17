import { createSlice } from '@reduxjs/toolkit';

const initialNik = '';

export const nikName = createSlice({
  name: 'person',
  initialState: initialNik,
  reducers: {
    myNik(_state, action) {
      return action.payload;
    },
  },
});

export const { myNik } = nikName.actions;
