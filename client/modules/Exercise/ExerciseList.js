/**
 * Created by Daniel on 2017-04-11.
 */
import React, { PropTypes } from 'react'
import Exercise from './Exercise'

const ExerciseList = ({ exercises, onExerciseClick }) => (
  <ul>
    {exercises.map(exercise =>
      <Exercise
        key={exercise.id}
        {...exercise}
        onClick={() => onExerciseClick(exercise.id)}
      />
    )}
  </ul>
);

ExerciseList.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onExerciseClick: PropTypes.func.isRequired
};

export default ExerciseList
