/**
 * Created by Daniel on 2017-04-11.
 */
import React from "react";
import PropTypes from "prop-types";
import {List, ListItem} from "material-ui/List";

const styles = {
  propContainer:    {
    width:    200,
    overflow: 'hidden',
    margin:   '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const WorkoutList = ({workouts, onWorkoutClick}) => (
  <List>
    {workouts.map(workout =>
      <ListItem
        key={workout.id}
        onClick={() => console.log(workout.id)}
      >
        {workout.name}
      </ListItem>
    )}
  </List>
);

WorkoutList.propTypes = {
  workouts:       PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onWorkoutClick: PropTypes.func.isRequired
};

export default WorkoutList
