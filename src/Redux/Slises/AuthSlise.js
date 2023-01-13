import { createSlice } from '@reduxjs/toolkit';

const initialUser = '';
const initialToken = '';

export const curentUser = createSlice({
  name: 'auth',
  initialState: initialUser,
  reducers: {
    isAuth(_state, action) {
      return action.payload;
    },
  },
});

export const curentToken = createSlice({
  name: 'token',
  initialState: initialToken,
  reducers: {
    newToken(_state, action) {
      return action.payload;
    },
  },
});

export const { newToken } = curentToken.actions;
export const { isAuth } = curentUser.actions;
