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

  addPhilosopher(philObj) {
    console.log("POST REQUEEEST: ", JSON.stringify({ philosopher: philObj }))
    fetch("http://localhost:3001/api/philosophers", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ philosopher: philObj })
    }).then(resp => resp.json())
      .then(phil => this.setState({ philosophers: this.state.philosophers.concat(phil) }))
  }

  handleSubmit(event) {
    event.preventDefault();
    let form = document.forms.philosopherForm;
    this.addPhilosopher({ name: form.name.value, age: 76, birthplace: form.birthplace.value });
    form.name.value = "";
    form.birthplace.value = "";
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
          <form name="philosopherForm">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="birthplace" placeholder="Birthplace" />
            <button onClick={(event) => this.handleSubmit(event)}>Add Philosopher</button>
          </form>
        </div>
      );
    }
  }
}

export default App;
