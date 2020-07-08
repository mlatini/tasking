import React from 'react';
import Schedules from './components/Schedules';
import AddTask from './components/AddTask'
import EditCategories from './components/EditCategories';
import Admin from './components/Admin';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import { GrTasks } from 'react-icons/gr';

function App() {
  return (
    <Switch>
      <div className="app">
        <header className="nav-wrapper">
          <nav className="top-nav">
            <div className="top-nav-left-image">
              <GrTasks />
            </div>
            <div className="top-nav-left-app-name">
              <h1>
                Tasking
              </h1>
            </div>
            <div className="top-nav-links">
              <ul>
                <li><Link to='/schedules'>Schedules</Link></li>
                <li><Link to='/add-task'>Add Task</Link></li>
                <li><Link to='/edit-categories'>Edit Categories</Link></li>
                <li><Link to='/admin'>Admin</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <Route path='/schedules'>
          <Schedules />
        </Route>
        <Route path='/add-task'>
          <AddTask />
        </Route>
        <Route path='/edit-categories'>
          <EditCategories />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
