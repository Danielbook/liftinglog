/**
 * Created by Daniel on 2017-04-11.
 */
import React from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Exercise from './Exercise'
import Set from "./Set";

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises
  }
};

const SetList = ({ sets }) => (
  <div>
    {sets.map(set =>
      <Set />
    )}
  </div>
);


// const mapDispatchToProps = (dispatch) => {
//   return {
//
//   }
// };

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(SetList);
