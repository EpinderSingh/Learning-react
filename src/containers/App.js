import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import classes from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App].js] constructor');

    this.state = {
      persons: [
        { id: 'asd', name: 'Epinder', age: 38 },
        { id: 'dfdf', name: 'Maninder', age: 33 },
        { id: 'gfrgtr', name: 'Keerat', age: 9 },
        { id: 'gfr', name: 'Jeevat', age: 4 },
      ],
      otherState: 'some other state',
      showsPersons: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillUnmount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

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
    this.setState({ persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showsPersons;
    this.setState({ showsPersons: !doesShow });
  };

  render() {
    console.log('[App.js] RENDER()');
    let persons = null;

    if (this.state.showsPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showsPersons={this.state.showsPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
