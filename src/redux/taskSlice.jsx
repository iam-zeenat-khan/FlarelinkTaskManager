// src/redux/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    list: [], // Initialize `list` here as an empty array or with the desired structure
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    // Other reducers as needed
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
