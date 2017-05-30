import React from 'react'
import PropTypes from "prop-types";
import ExerciseListItem from './ExerciseListItem'
import {List} from "material-ui/List";

const ExerciseList = (props) => (
  <List className="container">
    {props.exercises.map(exercise =>
      <ExerciseListItem
        key={exercise._id}
        exercise={exercise}
        onDelete={() => props.handleDeleteWorkout(exercise)}
        onAddSet={() => props.handleAddSet(exercise.cuid)}
        handleDeleteSet={props.handleDeleteSet}
      />
    )}
  </List>
);

ExerciseList.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    sets:  PropTypes.array.isRequired,
    cuid:  PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteWorkout: PropTypes.func.isRequired,
  handleAddSet: PropTypes.func.isRequired,
  handleDeleteSet: PropTypes.func.isRequired,
};

export default ExerciseList;
