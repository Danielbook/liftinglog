import React, {Component} from "react";

import DatePicker from "material-ui/DatePicker";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";

import AddExercise from "../Exercise/AddExercise";
import ExerciseListVisible from "../Exercise/ExerciseListVisible";

class Workout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TextField
          hintText=""
          floatingLabelText="Name of workout"/>

        <DatePicker hintText="Date of workout" container="inline" mode="landscape"/>

        <AddExercise />

        <Divider />

        <ExerciseListVisible />

      </div>
    );
  }
}

export default Workout;
