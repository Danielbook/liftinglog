/**
 * Created by Daniel on 2017-04-11.
 */
import React from 'react'
import PropTypes from "prop-types";
import Exercise from './Exercise'


const ExerciseList = ({ exercises }) => (

  <div>
    {exercises.map(exercise =>
      <Exercise
        key={exercise._id}
        exercise={exercise}
      />
    )}
  </div>
);

// ExerciseList.propTypes = {
//   exercises: PropTypes.object.isRequired,
// };

export default ExerciseList;
