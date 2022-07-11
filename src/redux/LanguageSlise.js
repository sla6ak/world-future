import { createSlice } from '@reduxjs/toolkit';

const initialLanguage = 'en'; // ru

export const language = createSlice({
  name: 'language',
  initialState: initialLanguage,
  reducers: {
    myLanguage(_state, action) {
      return action.payload;
    },
  },
});

export const { myLanguage } = language.actions;
