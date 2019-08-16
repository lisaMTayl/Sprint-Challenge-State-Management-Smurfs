import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import { getSmurfsData, deleteSmurf } from '../store/actions';
import Smurf from './Smurf';

const SmurfList = props => {

  const getSmurfs = e => {
    e.preventDefault();
    props.getSmurfsData();
  };


  return (
    <div>
          <button onClick={getSmurfs}>
            Get Smurfs
          </button>
    </div>
  )};


const mapStateToProps = state => {
  return {
    ...state,
    gettingSmurfs: state.gettingSmurfs,
    error: state.error,
    smurfs: state.smurfs
  }
};

export default connect(
  mapStateToProps,
  {
    getSmurfsData,
    deleteSmurf
  }
)(SmurfList);