import { createSlice } from '@reduxjs/toolkit'

const initialData = false

export const statusWS = createSlice({
  name: 'statusWS',
  initialState: initialData,
  reducers: {
    isWsConnect(_state, action) {
      return action.payload
    }
  }
})

export const { isWsConnect } = statusWS.actions
