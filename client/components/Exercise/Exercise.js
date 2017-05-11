/**
 * Created by Daniel on 2017-04-11.
 */
import React from "react";
import PropTypes from "prop-types";
import Badge from "material-ui/Badge";
import AddSet from "../Set/AddSet";
import SetList from "../Set/SetList";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentRemove from "material-ui/svg-icons/content/remove";


// https://github.com/callemall/material-ui/issues/3543 to stop selecting both row and item in LIST


const Exercise = (props) => (
  <div>
    <Badge
      value={props.exercise._id}
      badgeContent={1}
      primary={true}
    >
      {props.exercise.title}
    </Badge>
    <SetList sets={props.exercise.sets}/>
    <div>
      <AddSet />

      <FloatingActionButton
        mini={true}
        secondary={true}
        onTouchTap={props.onDelete}
      >
        <ContentRemove />
      </FloatingActionButton>
    </div>
  </div>
);

Exercise.propTypes = {
  exercise: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};


export default Exercise;
