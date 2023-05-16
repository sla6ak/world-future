import { createSlice } from '@reduxjs/toolkit'

const initialData = ''

export const nikName = createSlice({
  name: 'person',
  initialState: initialData,
  reducers: {
    myNik(_state, action) {
      return action.payload
    }
  }
})

export const { myNik } = nikName.actions
