import React, { useState, useEffect } from 'react';
import Task from './Task';
import moment from 'moment';
import { BsArrowRepeat, BsPlusSquare } from 'react-icons/bs';

const Tasks = () => {
  const [people, setPeople] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [notStartedTasks, setNotStartedTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [pausedTasks, setPausedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  // TODO: these two should come from the settings model. 
  const showDeletedTasks = true
  const showCompletedTasks = false

  useEffect(() => {
    setPeople([
      {
        name: 'Matthew',
      },
      {
        name: 'Tina',
      },
    ]);
  }, []);


  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8080/api/tasks')
      .then(response => response.json())
      .then((tasks ) => {
        setTasks(tasks);
        setNotStartedTasks(tasks.filter(task => task.status.notStarted));
        setInProgressTasks(tasks.filter(task => task.status.inProgress));
        setPausedTasks(tasks.filter(task => task.status.paused));
        setCompletedTasks(tasks.filter(task => task.status.completed));
        setDeletedTasks(tasks.filter(task => task.status.deleted));
      })
    setLoading(false);
  }, []);

  console.log('tasks', tasks);
  console.log('notStartedTasks', notStartedTasks);


  console.log('people', people);
  console.log('notStartedTasks', notStartedTasks);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <h1>Loading Tasks</h1>
    );
  }

  if (!notStartedTasks || notStartedTasks.length === 0) {
    return (
      <h1>No Tasks Loaded</h1>
    );
  }
  
  if (notStartedTasks.length >= 1) {
    return (
      <div>
        {/* <div classNameName="person-menu"> */}
        {/*   <ul> */}
        {/*     { */}
        {/*       people.map((person) => ( */}
        {/*         <li> */}
        {/*           <img */}
        {/*             src={emptyPic} */}
        {/*             alt={person.name} */}
        {/*             classNameName="profile-pic-lg" */}
        {/*           > */}
        {/*           </img> */}
        {/*           {person.name} */}
        {/*         </li> */}
        {/*       )) */}
        {/*     } */}
        {/*   </ul> */}
        {/* </div> */}
        <div classNameName="filters">
          <label htmlFor="show-completed-check">Show Completed Tasks</label>
          {
            showCompletedTasks ? (
              <input
                type="checkbox"
                checked id="showCompletedCheck"
                name="showCompletedCheck">
              </input>
            ) : (
              <input
                type="checkbox"
                id="showCompletedCheck"
                name="showCompletedCheck">
              </input>
            )
          }
          <label htmlFor="showDeletedCheck">Show Deleted Tasks</label>
          {
            showDeletedTasks ? (
              <input type="checkbox" checked id="showDeletedCheck" name="showDeletedCheck"></input>
            ) : (
              <input type="checkbox" id="showDeletedCheck" name="showDeletedCheck"></input>
            )
          }
        </div>
        <div className="content">
          <div className="five-column">
            <div className="column-header not-started-header">
              <label>Not Started</label>
            </div>
            {
              notStartedTasks.length >= 1 ? (
                notStartedTasks.map((task) => (
                  <Task 
                    task={task}
                  />
                ))
              ) : (
                <div></div>
              )
            }
            <div className="add-task-button-div">
              <a className="add-task-button" href="/add-task">
                <BsPlusSquare />
              </a>
            </div>
          </div>
          <div className="five-column">
            <div className="column-header in-progress-header">
              <label>In Progress</label>
            </div>
            {
              inProgressTasks.length >= 1 ? (
                inProgressTasks.map((task) => (
                  <Task 
                    task={task}
                  />
                ))
              ) : (
                <div></div>
              )
            }
            <div className="add-task-button-div">
              <a className="add-task-button" href="/add-task">
                <BsPlusSquare />
              </a>
            </div>
          </div>
          <div className="five-column">
            <div className="column-header paused-header">
              <label>Paused</label>
            </div>
            {
              pausedTasks.length >= 1 ? (
                pausedTasks.map((task) => (
                  <Task 
                    task={task}
                  />
                ))
              ) : (
                <div></div>
              )
            }
            <div className="add-task-button-div">
              <a className="add-task-button" href="/add-task">
                <BsPlusSquare />
              </a>
            </div>
          </div>
          <div className="five-column">
            <div className="column-header completed-header">
              <label>Completed(Last 72 hours)</label>
            </div>
            {
              completedTasks.length >= 1 ? (
                completedTasks.map((task) => (
                  <Task 
                    task={task}
                  />
                ))
              ) : (
                <div></div>
              )
            }
            <div className="add-task-button-div">
              <a className="add-task-button" href="/add-task">
                <BsPlusSquare />
              </a>
            </div>
          </div>
          <div className="five-column">
            <div className="column-header deleted-header">
              <label>Deleted</label>
            </div>
            {
              deletedTasks.length >= 1 ? (
                deletedTasks.map((task) => (
                  <Task 
                    task={task}
                  />
                ))
              ) : (
                <div></div>
              )
            }
            <div className="add-task-button-div">
              <a className="add-task-button" href="/add-task">
                <BsPlusSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Tasks;
