import React from 'react';
import ReactDOM from 'react-dom';
import TaskItem from '../components/TaskItem/TaskItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
