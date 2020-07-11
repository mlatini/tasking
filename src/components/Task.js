import React from 'react'
import moment from 'moment';
import emptyPic from '../empty-pic.png';
import { FaPlay, 
  FaPause,
  FaStop,
  FaCheck,
  FaForward,
  FaTrash,
  FaPencilAlt,
  FaWarning,
  FaPlusSquare,
} from 'react-icons/fa';
import { AiFillWarning } from 'react-icons/ai';
import { BsArrowRepeat, BsPlusSquare } from 'react-icons/bs';
import { MdAssignmentLate } from 'react-icons/md'
import { FcExpired } from 'react-icons/fc';

const Task = ({ task }) => {
  return (
    <div className="task-item">
      <div className="undo-label-div" id="{{id}}">
          {/* placeholder div for the undo label */}
        </div>
        <div className="task-item-header">
          <div className="task-item-name">
            {
              moment(task.dueDate).isBefore() ? (
                <label className="overdue-icon">
                  <FcExpired />
                </label>
              ) : (
                <label></label>
              )
            }
            <label>{task.title}</label>
          </div>
          <div className="task-item-pic"> 
            <img 
              src={emptyPic} 
              alt={task._owner.name} 
              className="profile-pic-sm"
            />
          </div>
        </div>
        <div className="task-item-body">
          <div className="task-item-top-line">
          <div>
            {
              // Check if it's overdue
              moment(task.dueDate).isBefore() ? (
              <label 
                className="overdue-label">
                {moment(task.dueDate).format('MMMM Do YYYY, h:mm a')} ({moment(task.dueDate).fromNow(true)} Late)
              </label>
              ) : (
                <label>{moment(task.dueDate).format('MMMM Do YYYY, h:mm:ss a')}</label>
              )
            }
            {
              task.frequency ? (
                <div className="task-item-frequency pull-right"> 
                  <label>
                    <BsArrowRepeat />
                    {task.frequency.time} {task.frequency.cadence}
                  </label>
                </div>
              ) : (
                <div></div>
              )
            }
          </div>
        </div>
          <div className="task-item-description">
            <label>{task.description}</label>
          </div>
          <div className="task-item-bottom-line">
            <label 
              className="bottom-label" 
              style={{
                backgroundColor: `${task._category._color.bgHex}`,
                color: `${task._category._color.fgHex}`
              }}
            >
              {task._category.name}
            </label>
            <label 
              className="bottom-label" 
              style={{
              backgroundColor: task._owner.bgHex, 
              color: task._owner.fgHex
              }}
            >
              {`${task._owner.firstName} ${task._owner.lastName}`}
            </label>
          </div>
          <div className="task-item-icons">
            <div className="status-buttons">
              <label className="start-btn start">
                <FaPlay />
                {/* <i className="fa fa-play start"></i> */}
              </label>
              <label className="pause-btn pause">
                <FaPause />
                 {/* <i className="fa fa-pause pause"></i> */}
              </label>
              <label className="complete-btn complete">
                <FaCheck />
                 {/* <i className="fa fa-check complete"></i> */}
              </label>
              <label className="skip-btn skip">
                <FaForward />
                {/* <i className="fa fa-step-forward skip"></i> */}
              </label>
            </div>
            <div className="edit-buttons">
              <label className="delete-btn">
                <FaTrash />
                {/* <i className="fa fa-trash-o delete-task-icon"></i> */}
              </label>
              <label 
                className="edit-btn">
                <a class="edit-btn" href={`/task/edit${task._id}`}>
                  <FaPencilAlt />
                  {/* <i className="fa fa-pencil"></i> */}
                </a>
              </label>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Task;
