import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleComplete,
  deleteTask,
  completeAllTasks,
} from "../reducers/tasks";
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

  const handleCompleteAll = () => {
    dispatch(completeAllTasks());
  };

  console.log(tasksList);

  return (
    <div className="task-list">
      <div
        className="task-count"
        aria-labelledby="totalTasksLabel uncompletedTasksLabel"
      >
        <div id="totalTasksLabel">Total Tasks: {totalTasks}</div>
        <div id="uncompletedTasksLabel">
          Incomplete Tasks: {uncompletedTasks}
        </div>
      </div>

      {tasksList.length === 0 ? (
        <div className="empty-state-message">
          No tasks yet. Add a task to get started!
        </div>
      ) : (
        tasksList.map((task) => (
          <UniqueTask
            key={task.id}
            task={task}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        ))
      )}

      <button type="button" onClick={handleCompleteAll}>
        Complete All
      </button>
    </div>
  );
};
