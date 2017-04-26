/**
 * Created by Daniel on 2017-04-11.
 */
import React from "react";
import {connect} from "react-redux";
import {addSet} from "./SetActions";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

let AddSet = ({dispatch}) => {

  return (
    <FloatingActionButton mini={true} onTouchTap={() => dispatch(addSet())}>
      <ContentAdd/>
    </FloatingActionButton>
  )
};

AddSet = connect()(AddSet);

export default AddSet;
