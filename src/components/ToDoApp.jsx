import React from "react";
import { TaskList } from "./TaskList";
import { AddTaskForm } from "./AddTaskForm";
import "../style/ToDoApp.css";

const TodoApp = () => {
  return (
    <div className="todo-app">
      <h1>ToDo App</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default TodoApp;