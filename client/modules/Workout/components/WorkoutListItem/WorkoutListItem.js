import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router";

function WorkoutListItem(props) {
  return (
    <div>
      <h3>
        <Link to={`/workouts/${props.workout.slug}-${props.workout.cuid}`}>
          {props.workout.title}
        </Link>
      </h3>
      <p><a href="#" onClick={props.onDelete}>Delete Post</a></p>
      <hr/>
    </div>
  );
}

WorkoutListItem.propTypes = {
  workout:  PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug:  PropTypes.string.isRequired,
    cuid:  PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default WorkoutListItem;
