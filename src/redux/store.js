import { configureStore } from '@reduxjs/toolkit';
import personalTaskReducer from './personalTaskSlice';
import workTaskReducer from './workTaskSlice';

const store = configureStore({
  reducer: {
    personalTasks: personalTaskReducer,
    workTasks: workTaskReducer,
  },
});

export default store;
