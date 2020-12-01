import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Epinder', age: 38 },
      { name: '---------', age: 33 },
      { name: 'Keerat', age: 9 },
    ],
    otherState: 'some other state',
    showsPersons: false,
  };

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        { name: 'Epinder', age: 38 },
        { name: e.target.value, age: 33 },
        { name: 'Keerat Singh', age: 9 },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showsPersons;
    this.setState({ showsPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      borderRadius: '10px',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showsPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonHandler} style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
