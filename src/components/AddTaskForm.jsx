import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/tasks";

export const AddTaskForm = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(addTask({ text: newTask }));
      setNewTask("");
    }
  };

  return (
    <div className="add-task-form">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Write your new task to add"
        aria-label="Write your new task to add"
      />
      <button type="button" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};