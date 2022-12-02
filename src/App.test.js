import React from 'react';
import ReactDOM from 'react-dom';
import AppUser from './user/11_use-reducer/12_UserContainer_Reducer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});
