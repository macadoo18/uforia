import React from 'react';
import './TaskListPage.scss';
import TaskItem from '../../components/TaskItem/TaskItem';
import { Link } from 'react-router-dom';
import Context from '../../Context';
import Checked from '../../images/checked.png';

import moment from 'moment';

class TaskListPage extends React.Component {
  static contextType = Context;

  render() {
    const today = moment();
    let tasks = this.context.tasks.map(task => {
      const start_date = moment(task.start_date);
      let days_between = today.diff(start_date, 'days');
      task.target_streak = days_between + 1;
      if (task.target_streak - task.streak > 1) {
        task.streak = 0;
        task.start_date = null;
        task.target_streak = 0;
        this.context.resetStreak(task.id, () => {});
      }
      return task;
    });

    return (
      <main className='taskListPage'>
        <h1>Daily Goals!</h1>

        <h3>Current goals:</h3>
        <ul className='currentGoals'>
          {tasks
            .filter(t => t.start_date !== null && t.end_date === null)
            .map(task => {
              return (
                <React.Fragment key={task.id}>
                  <li className='taskComponent'>
                    <TaskItem {...task} />
                  </li>
                  <li className='taskListCurrent'>
                    <div className='statusWrapper'>
                      <p className='startDate'>
                        <span className='hideMobile'>Started:</span>{' '}
                        <span className='dynamicInput'>
                          {moment(task.start_date).format('MMMM Do YYYY')}
                        </span>
                      </p>
                      {task.target_streak > task.streak ? (
                        <button
                          className='counter'
                          onClick={() => this.context.streakCounter(task.id)}
                        >
                          Mark it!
                        </button>
                      ) : (
                        <img
                          className='checked'
                          src={Checked}
                          width='30'
                          height='30'
                          alt='check mark'
                        />
                      )}
                      <p className='streak'>
                        <span className='hideMobile'>Streak:</span>{' '}
                        <span className='dynamicInput'>{task.streak}</span>
                      </p>
                    </div>
                  </li>
                </React.Fragment>
              );
            })}
          {tasks.filter(t => t.start_date !== null && t.end_date === null).length ===
            0 && <li className='empty'>None Available</li>}
        </ul>

        <h3>Goals queue:</h3>
        <ul>
          {tasks
            .filter(t => t.start_date === null && t.end_date === null)
            .map(task => {
              return (
                <li className='taskListItem' key={task.id}>
                  <TaskItem {...task} />
                </li>
              );
            })}
          {tasks.filter(t => t.start_date === null && t.end_date === null).length ===
            0 && <li className='empty'>None Available</li>}
        </ul>

        <p className='createTaskButton'>
          <Link className='button' to={'/createTask'}>
            Create a task
          </Link>
        </p>
      </main>
    );
  }
}

export default TaskListPage;
