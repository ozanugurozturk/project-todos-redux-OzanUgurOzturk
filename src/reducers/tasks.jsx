import { createSlice } from "@reduxjs/toolkit";

export const tasks = createSlice({
  name: "tasks",
  initialState: [
    { id: 1, text: "Watch video on actions & reducers", complete: true },
    { id: 2, text: "Follow redux codealong", complete: true },
    { id: 3, text: "Fork weekly assignment", complete: true },
    { id: 4, text: "Create a todo app", complete: false },
  ],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: state.length + 1,
        text: action.payload.text,
        complete: false,
      });
    },
    toggleComplete: (state, action) => {
      const taskId = action.payload;
      const task = state.find((t) => t.id === taskId);
      if (task) {
        task.complete = !task.complete;
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      return state.filter((task) => task.id !== taskId);
    },
  },
});

export const { addTask, toggleComplete, deleteTask } = tasks.actions;

export default tasks;
