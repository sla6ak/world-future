import { createSlice } from '@reduxjs/toolkit';

const initialChat = { generalСhat: [], mySMS: [] };

export const chatGame = createSlice({
  name: 'chatGame',
  initialState: initialChat,
  reducers: {
    generalСhatAction(_state, action) {
      return action.payload;
    },
    mySMSAction(_state, action) {
      return action.payload;
    },
  },
});

export const { generalСhatAction } = chatGame.actions;
