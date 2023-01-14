import { createSlice } from '@reduxjs/toolkit';

const initialLordInfo = { nikName: 'test' };

export const lordInfo = createSlice({
  name: 'person',
  initialState: initialLordInfo,
  reducers: {
    myNikAction(state, action) {
      state.nikName = action.payload;
    },
  },
});

export const { myNikAction } = lordInfo.actions;
