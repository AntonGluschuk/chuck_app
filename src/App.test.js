import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

it('App component should render without crashing ', () => {
  expect(shallow(<App/>).exists()).toBeTruthy();
});
