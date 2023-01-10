import { createSlice } from '@reduxjs/toolkit';

const initialLanguage = {
  myLanguage: 'en',
  transleter: {
    listLanguage: [{ shortName: 'en', text: 'ENGLISH' }],
    StartPage: null,
    LoginPage: null,
    RegisterPage: null,
    SettingLord: null,
  },
}; // ru

export const language = createSlice({
  name: 'language',
  initialState: initialLanguage,
  reducers: {
    myLanguage(state, action) {
      state.myLanguage = action.payload;
    },
    transleter(state, action) {
      state.transleter = action.payload;
    },
  },
});

export const { myLanguage, transleter } = language.actions;
