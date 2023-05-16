import { createSlice } from '@reduxjs/toolkit'

const initialData = null

export const lordInfo = createSlice({
  name: 'person',
  initialState: initialData,
  reducers: {
    allLordInfoAction(_state, action) {
      return action.payload
    },
    myNikAction(state, action) {
      state.nikName = action.payload
    }
  }
})

export const { myNikAction, allLordInfoAction } = lordInfo.actions
