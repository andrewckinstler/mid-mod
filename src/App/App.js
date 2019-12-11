import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls/apiCalls.js';
import Form from '../Form/Form'

class App extends Component {
  constructor(){
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(data => {this.setState(
        { reservations: data }
      )
      console.log(this.state)
    }
  )}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
            {this.state.reservations.map(res => {
              return (
                <div className='cards'>
                  <h3>{res.name}</h3>
                  <p>{res.date}</p>
                  <p>{res.number}</p>
                  <p>{res.time}</p>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

export default App;
