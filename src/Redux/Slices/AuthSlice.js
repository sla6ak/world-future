import { createSlice } from '@reduxjs/toolkit'

const initialData = { user: { name: '', email: '' }, token: '' }

export const auth = createSlice({
  name: 'auth',
  initialState: initialData,
  reducers: {
    isAuth(state, action) {
      state.user = action.payload
    },
    newToken(state, action) {
      state.token = action.payload
    }
  }
})

export const { isAuth, newToken } = auth.actions
