/**
 * Created by Daniel on 2017-04-11.
 */
import React, {PropTypes} from "react";
import ListItem from "material-ui/List";

const Exercise = ({id, onClick, completed, text}) => (
  <ListItem
    value={id}
  >
    {text}
  </ListItem>

);

Exercise.propTypes = {
  id:        PropTypes.number.isRequired,
  onClick:   PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text:      PropTypes.string.isRequired
};


export default Exercise;
