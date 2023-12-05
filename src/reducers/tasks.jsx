import { createSlice } from "@reduxjs/toolkit";

export const tasks = createSlice({
  name: "tasks",
  initialState: [
    { id: 1, text: "Wash your face", complete: false },
    { id: 2, text: "Eat you breakfast", complete: false },
    { id: 3, text: "Take your belongings with you", complete: false },
    { id: 4, text: "Check you mails", complete: false },
    { id: 5, text: "Take some notes before the daily", complete: false },
    { id: 6, text: "Eat your lunch", complete: false },
    { id: 7, text: "Create you tomorrow's to do list", complete: false },
  ],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: state.length + 1,
        text: action.payload.text,
        complete: false, // Setting the initial current state to false when a task is added
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
