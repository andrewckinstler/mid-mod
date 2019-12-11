import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      numGuests: ''
    }
  }

  handleChange = event => this.setState({[event.target.name]: event.target.value})

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
          />
        <input
          type='date'
          placeholder='Date'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
          />
        <input
          type='time'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
          />
        <input
          type='number'
          placeholder='Number of guests'
          name='numGuests'
          value={this.state.numGuests}
          onChange={event => this.handleChange(event)}
          />
          <button className='makeReservation'>Make Reservation</button>
      </form>
    )
  }
}

export default Form;