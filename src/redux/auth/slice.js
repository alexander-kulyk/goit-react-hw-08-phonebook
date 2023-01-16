import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logOutUser, refreshUser, registerUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(registerUser.rejected, state => {
        state.error = true;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(loginUser.rejected, state => {
        state.error = true;
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = false;
      })
      .addCase(logOutUser.rejected, state => {
        state.error = true;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action?.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authSliceReduser = authSlice.reducer;

//--------------------------------------------------

// const extraActions = [fetchTasks, addTask, deleteTask, toggleCompleted];

// const getActions = type => extraActions.map(action => action[type]);

// const fetchTasksFulfilledReducer = (state, action) => {
//   state.items = action.payload;
// };

// const addTaskFulfilledReducer = (state, action) => {
//   state.items.push(action.payload);
// };

// const deleteTaskFulfilledReducer = (state, action) => {
//   const index = state.items.findIndex(task => task.id === action.payload.id);
//   state.items.splice(index, 1);
// };

// const toggleCompletedFulfilledReducer = (state, action) => {
//   const index = state.items.findIndex(task => task.id === action.payload.id);
//   state.items.splice(index, 1, action.payload);
// };

// const anyPendingReducer = state => {
//   state.isLoading = true;
// };

// const anyRejectedReducer = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const anyFulfilledReducer = state => {
//   state.isLoading = false;
//   state.error = null;
// };

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(fetchTasks.fulfilled, fetchTasksFulfilledReducer)
//       .addCase(addTask.fulfilled, addTaskFulfilledReducer)
//       .addCase(deleteTask.fulfilled, deleteTaskFulfilledReducer)
//       .addCase(toggleCompleted.fulfilled, toggleCompletedFulfilledReducer)
//       .addMatcher(isAnyOf(...getActions("pending")), anyPendingReducer)
//       .addMatcher(isAnyOf(...getActions("rejected")), anyRejectedReducer)
//       .addMatcher(isAnyOf(...getActions("fulfilled")), anyFulfilledReducer),
// });
