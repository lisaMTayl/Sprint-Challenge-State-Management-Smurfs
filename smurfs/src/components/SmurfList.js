import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSmurfsData } from '../store/actions';
// import {getSmurfsData, deleteSmurf, DELETE_SMURF_START} from '../store/actions';


const SmurfList = props => {

  const getSmurfs = e => {
    e.preventDefault();
    props.getSmurfsData();
  };

  // const deleteSmurfs = e => {
  //   e.preventDefault();
  //   props.deleteSmurf();
  // };


  return (
    <div>
          <button onClick={getSmurfs}>
            List Smurfs
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
    // deleteSmurf
  }
)(SmurfList);