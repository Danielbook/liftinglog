import React from 'react'
import PropTypes from "prop-types";
import Exercise from './Exercise'

const ExerciseList = (props) => (

  <div>
    {props.exercises.map(exercise =>
      <Exercise
        key={exercise._id}
        exercise={exercise}
        onDelete={() => props.handleDeleteWorkout(exercise.cuid)}
      />
    )}
  </div>
);

ExerciseList.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    sets:  PropTypes.array.isRequired,
    cuid:  PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteWorkout: PropTypes.func.isRequired,
};

export default ExerciseList;
