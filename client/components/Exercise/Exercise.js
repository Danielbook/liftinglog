/**
 * Created by Daniel on 2017-04-11.
 */
import React from "react";
import PropTypes from "prop-types";
import Badge from "material-ui/Badge";
import AddSet from "../Set/AddSet";
import SetList from "../Set/SetList";

const Exercise = ({exercise}) => (
  <div>
    <Badge
      value={exercise._id}
      badgeContent={1}
      primary={true}
    >
      {exercise.title}
    </Badge>
    <SetList sets={exercise.sets}/>
    <div>
      <AddSet />
    </div>
  </div>
);

Exercise.propTypes = {
  exercise: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};


export default Exercise;
