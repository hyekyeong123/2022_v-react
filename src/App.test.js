import React from 'react';
import ReactDOM from 'react-dom';
import AppUser from './12_User_D';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});
