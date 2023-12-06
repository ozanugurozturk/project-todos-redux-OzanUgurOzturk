import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import "../style/UniqueTask.css";

const UniqueTask = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className="task">
      <div className="checkbox-label-wrapper">
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
      </div>
      <div className="task-details">
        <div className="timestamp">
          {task.timestamp && (
            <>
              <div>Created at:</div>
              <span>{format(new Date(task.timestamp), "yyyy.MM.dd HH:mm")}</span>
            </>
          )}
        </div>
        <button type="button" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

UniqueTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    timestamp: PropTypes.string,
  }).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UniqueTask;