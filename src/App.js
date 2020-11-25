import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Epinder" age="36" />
        <Person name="Maninder" age="33">
          {' '}
          My Hobbies: Running.
        </Person>
        <Person name="Keerat" age="9" />
      </div>
    );
  }
}

export default App;
