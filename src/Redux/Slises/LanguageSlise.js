import { createSlice } from '@reduxjs/toolkit'

const initialLanguage = {
  myLanguage: 'en',
  transleter: {
    listLanguage: [{ shortName: 'en', text: 'ENGLISH' }],
    startPage: null,
    loginPage: null,
    registerPage: null,
    settingLord: null,
    objects: null
  }
}

export const language = createSlice({
  name: 'language',
  initialState: initialLanguage,
  reducers: {
    switchLanguage(state, action) {
      state.myLanguage = action.payload
    },
    transleter(state, action) {
      state.transleter = action.payload
    }
  }
})

export const { switchLanguage, transleter } = language.actions
