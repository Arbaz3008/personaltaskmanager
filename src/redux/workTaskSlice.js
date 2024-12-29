import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/api';

// Fetch work tasks from API
export const fetchWorkTasks = createAsyncThunk(
  'workTasks/fetchTasks',
  async () => {
    const response = await axios.get('/tasks/work');
    return response.data;
  }
);

const workTaskSlice = createSlice({
  name: 'workTasks',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {
    addWorkTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteWorkTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleWorkTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWorkTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchWorkTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addWorkTask, deleteWorkTask, toggleWorkTask } = workTaskSlice.actions;
export default workTaskSlice.reducer;
