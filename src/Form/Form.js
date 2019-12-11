import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = event => this.setState({[event.target.name]: event.target.value})

  handleClick = event => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    console.log(newReservation)
    this.props.addReservation(newReservation);
  }

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
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
          />
          <button className='makeReservation' onClick={this.handleClick}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;