import React from 'react';
import {
  FaPlay,
  FaPause,
  FaStop,
  FaCheck,
  FaForward,
  FaTrash,
  FaPencilAlt,
} from 'react-icons/fa';

const TaskItemIcons = ({ status, _id: id }) => {
  return (
    <div className="task-item-icons">
      <div className="status-buttons">
        {
          status.inProgress ? (
            <label className="start-btn stop">
              <FaStop />
            </label>
          ) : (
            <label className="start-btn start">
              <FaPlay />
            </label>
          )
        }
        {
          status.paused ? (
            <label className="start-btn stop">
              <FaStop />
            </label>
          ) : (
            <label className="pause-btn pause">
              <FaPause />
            </label>
          )
        }
        <label className="complete-btn complete">
          <FaCheck />
        </label>
        <label className="skip-btn skip">
          <FaForward />
        </label>
      </div>
      <div className="edit-buttons">
        <label className="delete-btn">
          <FaTrash />
        </label>
        <label
          className="edit-btn">
          <a className="edit-btn" href={`/task/edit${id}`}>
            <FaPencilAlt />
          </a>
        </label>
      </div>
    </div>
  );
};
export default TaskItemIcons;
