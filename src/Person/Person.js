import React from 'react';

const person = (props) => {
  return (
    <p>
      I'm a {props.name} and {props.age} years old.
    </p>
  );
};

export default person;
