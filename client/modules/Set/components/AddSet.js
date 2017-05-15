/**
 * Created by Daniel on 2017-04-11.
 */
import React from "react";
import {connect} from "react-redux";
import {addSet} from "../SetActions";
import IconButton from 'material-ui/IconButton';
import ContentAddCircle from "material-ui/svg-icons/content/add-circle-outline";

let AddSet = ({dispatch}) => {

  return (
    <IconButton
      onTouchTap={() => dispatch(addSet())}
      tooltip="Add set"
    >
      <ContentAddCircle />
    </IconButton>
  )
};

AddSet = connect()(AddSet);

export default AddSet;
