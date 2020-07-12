import React from 'react';
import moment from 'moment';
import { FcExpired } from 'react-icons/fc';
import emptyPic from '../empty-pic.png';

const TaskItemHeader = ({ dueDate, title, _owner: owner }) => {
  return (
    <div className="task-item-header">
      <div className="task-item-name">
        {
          moment(dueDate).isBefore() ? (
            <label className="overdue-icon">
              <FcExpired />
            </label>
          ) : (
            <label></label>
          )
        }
        <label>{title}</label>
      </div>
      <div className="task-item-pic">
        <img
          src={emptyPic}
          alt={owner.name}
          className="profile-pic-sm"
        />
      </div>
    </div>
  );
};
export default TaskItemHeader;
