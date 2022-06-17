import { createSlice } from '@reduxjs/toolkit';

const initialNik = '';

export const nikName = createSlice({
  name: 'person',
  initialState: initialNik,
  reducers: {
    newNik(_state, action) {
      return action.payload;
    },
  },
});

export const { newPerson } = nikName.actions;
