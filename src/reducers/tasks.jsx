import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

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
      const timestamp = new Date();
      const formattedTimestamp = format(timestamp, "yyyy-MM-dd HH:mm:ss");
      state.tasksList.push({
        id: newId,
        text: action.payload.text,
        complete: false,
        timestamp: formattedTimestamp,
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
    completeAllTasks: (state) => {
      state.tasksList.forEach((task) => {
        task.complete = true;
      });
    },
  },
});

export const { addTask, toggleComplete, deleteTask, completeAllTasks } = tasks.actions;

export default tasks;