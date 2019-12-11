import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form rendering', () => {
  it('should match the Form snapshot', () => {
    const wrapper = shallow(<Form addReservation={jest.fn} />)
  })
})