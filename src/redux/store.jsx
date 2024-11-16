// src/redux/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store; // Default export
