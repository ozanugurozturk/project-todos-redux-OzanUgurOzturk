import React from "react";
import { TaskList } from "./TaskList";
import { AddTaskForm } from "./AddTaskForm";
import "../style/ToDoApp.css";

const TodoApp = () => {
  return (
    <div className="todo-app">
      <h1 className="app-name">To Do List</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default TodoApp;