import React from "react";
import PropTypes from "prop-types";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentRemove from "material-ui/svg-icons/content/remove";
import {ListItem} from "material-ui/List";
import {Link} from "react-router";

//TODO Fix the triggering of both the containerElement and rightIconButton triggering when clicking rightIconButton

function WorkoutListItem(props) {
  return (
    <ListItem
      primaryText={props.workout.title}
      secondaryText={props.workout.date}
      containerElement={<Link to={`/workouts/${props.workout.slug}-${props.workout.cuid}`}/>}
      rightIconButton={
        <FloatingActionButton
          mini={true}
          secondary={true}
          onClick={props.onDelete}
        >
          <ContentRemove />
        </FloatingActionButton>}
    />
  );
}

WorkoutListItem.propTypes = {
  workout: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default WorkoutListItem;
