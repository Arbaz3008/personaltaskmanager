import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/api';

// Fetch personal tasks from API
export const fetchPersonalTasks = createAsyncThunk(
  'personalTasks/fetchTasks',
  async () => {
    const response = await axios.get('/tasks/personal');
    return response.data;
  }
);

const personalTaskSlice = createSlice({
  name: 'personalTasks',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {
    addPersonalTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deletePersonalTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    togglePersonalTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonalTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPersonalTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchPersonalTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addPersonalTask, deletePersonalTask, togglePersonalTask } = personalTaskSlice.actions;
export default personalTaskSlice.reducer;
