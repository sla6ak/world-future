import { createSlice } from '@reduxjs/toolkit'

const initialData = false

export const errorUser = createSlice({
  name: 'errorUser',
  initialState: initialData,
  reducers: {
    isErrorUser(_state, action) {
      return action.payload
    }
  }
})

export const { isErrorUser } = errorUser.actions
