import React from 'react';
import ReactDOM from 'react-dom';
import TaskListPage from '../routes/TaskListPage/TaskListPage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <TaskListPage />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
