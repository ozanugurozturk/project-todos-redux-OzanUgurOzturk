import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/tasks";
import "../style/AddTaskForm.css";

export const AddTaskForm = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  const maxCharacters = 40;

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(addTask({ text: newTask }));
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxCharacters) {
      setNewTask(inputValue);
    }
  };

  return (
    <div className="add-task-form">
      <div className="input-wrapper">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Write a new task"
          aria-label="Write a new task"
        />
        <div
          className="character-counter"
          style={{ color: newTask.length === maxCharacters ? "red" : "black" }}
        >
          {maxCharacters - newTask.length}
        </div>
      </div>
      <button type="button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};