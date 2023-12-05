import React from "react";
import PropTypes from "prop-types";

const UniqueTask = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        id={`task-${task.id}`}
        checked={task.complete}
        onChange={() => onToggleComplete(task.id)}
      />
      <label
        htmlFor={`task-${task.id}`}
        className={task.complete ? "completed" : ""}
      >
        {task.text}
      </label>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

UniqueTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UniqueTask;