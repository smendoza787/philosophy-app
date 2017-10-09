import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      philosophers: []
    }

    fetch('http://localhost:3001/api/philosophers')
      .then(resp => resp.json())
      .then(phils => this.setState({ philosophers: phils }))
  }
 
  render() {
    let renderPhilosophers = this.state.philosophers.map(phil => 
      <div key={phil.id} style={{ backgroundColor: 'lightgreen' }}>
        <h2>Name: {phil.name}</h2>
        <h3>Age: {phil.age}</h3>
        <h3>Birthplace: {phil.birthplace}</h3>
      </div>
    )

    if (this.state.philosophers.length === 0) {
      return (
        <div className="App">
          <h1>Philosophers</h1>
          <h1>Loading dood...</h1>
        </div>
      )
    } else {
      return (
        <div className="App">
          <h1>Philosophers</h1>
          <div>
            {renderPhilosophers}
          </div>
        </div>
      );
    }
  }
}

export default App;
