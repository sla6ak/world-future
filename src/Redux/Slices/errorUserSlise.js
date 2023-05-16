import { createSlice } from '@reduxjs/toolkit'

const initialIsErrorUser = false

export const errorUser = createSlice({
  name: 'errorUser',
  initialState: initialIsErrorUser,
  reducers: {
    isErrorUser(_state, action) {
      return action.payload
    }
  }
})

export const { isErrorUser } = errorUser.actions
