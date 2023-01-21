import { createSlice } from '@reduxjs/toolkit'

const initialUser = { user: { name: '', email: '' }, token: '' }

export const auth = createSlice({
  name: 'auth',
  initialState: initialUser,
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
