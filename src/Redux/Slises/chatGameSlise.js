import { createSlice } from '@reduxjs/toolkit';

const initialChat = { generalСhat: [], mySMS: [] };

export const chatGame = createSlice({
  name: 'chatGame',
  initialState: initialChat,
  reducers: {
    generalСhatAction(state, {payload}) {
      state.generalСhat.push(payload);
      // return action.payload;
    },
    mySMSAction(state, {payload}) {
      state.mySMS.push(payload);
      // return action.payload;
    },
  },
});

export const { generalСhatAction, mySMSAction } = chatGame.actions;
