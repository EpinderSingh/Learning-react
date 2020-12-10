import React from 'react';

import classes from './Person.css';

class Person extends React.Component {
  render() {
    console.log('[PERSON.js] RENDERING...');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
