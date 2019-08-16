
import React from 'react';

const Smurf = props => {
  return (
    <div>
      <h3>Name: {props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <button
        onClick={() => props.deleteSmurf(props.smurf.id)}
      >
        Delete Smurf
      </button>
    </div>
  );
};

export default Smurf;