import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe('Application rendering', () => {
  it('should render the application', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot();
  })

})