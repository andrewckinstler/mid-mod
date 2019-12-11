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

describe('State testing', () => {
  it('should update state when addReservation is called', () => {
    const wrapper = shallow(<App />);
    const mockReservation = { name: 'Andrew', date: '1/11', number: 4, time: '7:30'}
    const expected = [mockReservation]

    expect(wrapper.state('reservations')).toEqual([])
    wrapper.instance().addReservation(mockReservation)
    expect(wrapper.state('reservations')).toEqual(expected)
  })
})