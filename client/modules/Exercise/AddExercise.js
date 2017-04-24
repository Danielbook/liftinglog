/**
 * Created by Daniel on 2017-04-11.
 */
import React from "react";
import {connect} from "react-redux";
import {addExercise} from "./ExerciseActions";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

let AddExercise = ({dispatch}) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.input.value.trim()) {
          return
        }
        dispatch(addExercise(input.input.value, 0));
        input.input.value = ''
      }}>
        <TextField
          hintText="Exercise"
          floatingLabelText="Exercise Name"
          ref={node => {
            input = node
          }}/>
        <RaisedButton label="Add Exercise" primary={true} type="submit"/>
      </form>
    </div>
  )
};

AddExercise = connect()(AddExercise);

export default AddExercise;
