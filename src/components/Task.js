import React, { Fragment } from 'react'
import moment from 'moment';
import emptyPic from '../empty-pic.png';
import TaskItemHeader from './TaskItemHeader';
import TaskItemIcons from './TaskItemIcons';
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
      <div className="task-item-body">
        {
          task.status.completed || task.status.deleted ? (
            <Fragment>
              <div className="undo-label-div" id="{{id}}">
                <label>
                  <a 
                    href="#" 
                    className="undo-completed-task"
                  >
                    {task.status.completed ? 'Undo completed task' : 'Undo deleted task'}
                  </a>
                </label>
              </div>
                <div className="task-item-name">
                  <label>{task.title}</label>
                </div>
            </Fragment>
            ) : (
            <TaskItemHeader
              {...task}
              />
          )
        }
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
            {
              !task.status.deleted && !task.status.completed ? (
                <TaskItemIcons 
                  {...task}
                />
                ) : (
                  <div></div>
                )
            }
      </div>
    </div>
  )
}
export default Task;
