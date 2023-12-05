import { createSlice } from "@reduxjs/toolkit";

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    tasksList: [
      { id: 1, text: "Wash your face", complete: false },
      { id: 2, text: "Eat you breakfast", complete: false },
      { id: 3, text: "Take your belongings with you", complete: false },
      { id: 4, text: "Check your mails", complete: false },
      { id: 5, text: "Take some notes before the daily", complete: false },
      { id: 6, text: "Eat your lunch", complete: false },
      { id: 7, text: "Create your tomorrow's to-do list", complete: false },
    ],
    latestId: 7,
  },
  reducers: {
    addTask: (state, action) => {
      const newId = state.latestId + 1;
      state.tasksList.push({
        id: newId,
        text: action.payload.text,
        complete: false,
      });
      state.latestId = newId;
    },
    toggleComplete: (state, action) => {
      const taskId = action.payload;
      const task = state.tasksList.find((t) => t.id === taskId);
      if (task) {
        task.complete = !task.complete;
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.tasksList = state.tasksList.filter((task) => task.id !== taskId);
    },
  },
});

export const { addTask, toggleComplete, deleteTask } = tasks.actions;

export default tasks;
