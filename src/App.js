import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    person: [
      { name: 'Epinder', age: 38 },
      { name: '---------', age: 33 },
      { name: 'Keerat', age: 9 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 38 },
        { name: 'Maninder Kaur ', age: 33 },
        { name: 'Keerat Singh', age: 9 },
      ],
    });
  };

  nameChangedHandler = (e) => {
    this.setState({
      person: [
        { name: 'Epinder', age: 38 },
        { name: e.target.value, age: 33 },
        { name: 'Keerat Singh', age: 9 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Epinder Singh Mann')}>
          Switch Names
        </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'EPINDER')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Running.
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
  }
}

export default App;
