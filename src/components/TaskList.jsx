import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from "../reducers/tasks";
import UniqueTask from "./UniqueTask";
import "../style/TaskList.css";

export const TaskList = () => {
  const tasksList = useSelector((state) => state.tasks.tasksList);
  const dispatch = useDispatch();

  const handleToggleComplete = (taskId) => {
    dispatch(toggleComplete(taskId));
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const totalTasks = tasksList.length;
  const uncompletedTasks = tasksList.filter((task) => !task.complete).length;

  console.log(tasksList);

  return (
    <div className="task-list">
      <div className="task-count" aria-labelledby="totalTasksLabel uncompletedTasksLabel"
      >
        <div id="totalTasksLabel">Total Tasks: {totalTasks}</div>
        <div id="uncompletedTasksLabel">Uncompleted Tasks: {uncompletedTasks}</div>
      </div>
      {tasksList.map((task) => (
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