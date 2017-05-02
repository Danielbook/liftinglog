/**
 * Created by Daniel on 2017-04-11.
 */
import React from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Exercise from './Exercise'

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises
  }
};

const ExerciseList = ({ exercises }) => (
  <div>
    {exercises.map(exercise =>
      <Exercise
        key={exercise.id}
        {...exercise}
      />
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
)(ExerciseList);
