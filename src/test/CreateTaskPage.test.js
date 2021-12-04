import React from 'react';
import ReactDOM from 'react-dom';
import CreateTaskPage from '../routes/CreateTaskPage/CreateTaskPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateTaskPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
