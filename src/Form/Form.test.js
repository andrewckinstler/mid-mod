import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form rendering', () => {
  it('should match the Form snapshot', () => {
    const wrapper = shallow(<Form addReservation={jest.fn()} />)
  })
})

describe('Form state testing', () => {
  it('should update state when handleChange is invoked', () => {
    const wrapper = shallow(<Form addReservation={jest.fn()} />);
    const mockEvent = {target: {name: 'name', value: 'Andrew'}};
    const expected = 'Andrew';

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual(expected)
  })
})