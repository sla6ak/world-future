import { createSlice } from '@reduxjs/toolkit';

const initialLanguage = {
  myLanguage: 'en',
  transleter: {
    listLanguage: [
      { shortName: 'en', text: 'ENGLISH' },
      { shortName: 'ua', text: 'UKRAINIAN' },
      { shortName: 'ru', text: 'RUSSIAN' },
    ],
    StartPage: {},
    LoginPage: {},
    RegisterPage: {},
    SettingLord: {},
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
