/**
 * Created by Daniel on 2017-04-11.
 */
import React from 'react'
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

export default ExerciseList;
