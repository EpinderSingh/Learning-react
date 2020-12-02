import React, { Component } from 'react';
import styled from 'styled-components';
import Person from './Person/Person';

import './App.css';

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? 'red' : 'green')};
  color: white;
  font: inherit;
  border: 2px solid blue;
  borderradius: 10px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Epinder', age: 38 },
      { id: 'dfdf', name: 'Maninder', age: 33 },
      { id: 'gfrgtr', name: 'Keerat', age: 9 },
    ],
    otherState: 'some other state',
    showsPersons: false,
  };

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showsPersons;
    this.setState({ showsPersons: !doesShow });
  };

  render() {
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
                key={person.id}
                changed={(e) => this.nameChangedHandler(e, person.id)}
              />
            );
          })}
        </div>
      );
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton
          alt={this.state.showsPersons}
          onClick={this.togglePersonHandler}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
