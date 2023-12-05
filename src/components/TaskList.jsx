import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from "../reducers/tasks";
import UniqueTask from "./UniqueTask";
import "../style/TaskList.css";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggleComplete = (taskId) => {
    dispatch(toggleComplete(taskId));
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  const totalTasks = tasks.length;
  const uncompletedTasks = tasks.filter((task) => !task.complete).length;

  return (
    <div className="task-list">
      <div className="task-count">
        Total Tasks: {totalTasks} | Uncompleted Tasks: {uncompletedTasks}
      </div>
      {tasks.map((task) => (
        <UniqueTask
          key={task.id}
          task={task}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
