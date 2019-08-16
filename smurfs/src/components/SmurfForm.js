import React, { useState } from 'react';
import { connect } from 'react-redux'
import { postSmurfData } from '../store/actions';



const SmurfForm = props => {

  const [formState, setFormState] = useState({
    name: '',
    age: '',
    height: ''
  });

  const handleChanges = e => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  };

  const submitSmurf = e => {
    e.preventDefault();
    props.postSmurfData(formState);
    setFormState({
      name: '',
      age: '',
      height: ''
    })
  };

  return (
    <div>
      <form onSubmit={submitSmurf}>
        <div><input
          placeholder="name"
          name="name"
          value={formState.name}
          onChange={handleChanges}
        /></div><br />
        <div><input
          type="number"
          placeholder="age"
          name="age"
          value={formState.age}
          onChange={handleChanges}
        /></div><br />
        <div><input
          type="number"
          placeholder="height"
          name="height"
          value={formState.height}
          onChange={handleChanges}
        /></div><br />
        <button>Add Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
  }
};

export default connect(
  mapStateToProps,
  { postSmurfData }
)(SmurfForm);