import React from "react";
import PropTypes from "prop-types";
import WorkoutListItem from "./WorkoutListItem/WorkoutListItem";

function WorkoutList(props) {
  return (
    <div>
      {props.workouts.map(workout => (
        <WorkoutListItem
          workout={workout}
          key={workout.cuid}
          onDelete={() => props.handleDeleteWorkout(workout.cuid)}
        />
      ))
      }
    </div>
  );
}

WorkoutList.propTypes = {
  workouts:         PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug:  PropTypes.string.isRequired,
    cuid:  PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteWorkout: PropTypes.func.isRequired,
};

export default WorkoutList;
