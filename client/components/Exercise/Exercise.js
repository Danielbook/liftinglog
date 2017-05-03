/**
 * Created by Daniel on 2017-04-11.
 */
import React from "react";
import PropTypes from "prop-types";
import Badge from "material-ui/Badge";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import AddSet from "../Set/AddSet";
import SetList from "../Set/SetList";

const Exercise = ({id, text}) => (
  <div>
    <Badge
      value={id}
      badgeContent={1}
      primary={true}
    >
      {text}
    </Badge>
    <SetList />
    <div>
      <AddSet />
    </div>
  </div>
);

Exercise.propTypes = {
  id:   PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};


export default Exercise;
