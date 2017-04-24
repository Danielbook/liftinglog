/**
 * Created by Daniel on 2017-04-11.
 */
import React from "react";
import PropTypes from "prop-types";
import Badge from "material-ui/Badge";

const Exercise = ({id, onClick, completed, text, numberOfSets}) => (
  <Badge
    value={id}
    badgeContent={numberOfSets}
    primary={true}
  >
    {text}
  </Badge>

);

Exercise.propTypes = {
  id:           PropTypes.number.isRequired,
  onClick:      PropTypes.func.isRequired,
  completed:    PropTypes.bool.isRequired,
  text:         PropTypes.string.isRequired,
  numberOfSets: PropTypes.number.isRequired
};


export default Exercise;
