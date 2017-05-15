import React from "react";
import PropTypes from "prop-types";
import WorkoutListItem from "./WorkoutListItem";
import {List} from "material-ui/List";
import Subheader from 'material-ui/Subheader';

function WorkoutList(props) {
  return (
    <List>
      <Subheader>Your workouts</Subheader>
      {props.workouts.map(workout => (
        <WorkoutListItem
          workout={workout}
          key={workout.cuid}
          onDelete={() => props.handleDeleteWorkout(workout.cuid)}
        />
      ))}
    </List>
  );
}

WorkoutList.propTypes = {
  workouts:            PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug:  PropTypes.string.isRequired,
    cuid:  PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteWorkout: PropTypes.func.isRequired,
};

export default WorkoutList;
