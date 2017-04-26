import React, {Component} from "react";

import DatePicker from "material-ui/DatePicker";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";
import RaisedButton from 'material-ui/RaisedButton';
import NavigationChevronLeft from "material-ui/svg-icons/navigation/chevron-left";
import AddExercise from "../../components/Exercise/AddExercise";
import ExerciseList from "../../components/Exercise/ExerciseList";
import {browserHistory} from "react-router";

class Workout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <RaisedButton
            onTouchTap={browserHistory.goBack}
            style={{marginTop: 20}}
            icon={<NavigationChevronLeft />}
          />
        </div>
        <TextField
          hintText=""
          floatingLabelText="Name of workout"/>

        <DatePicker hintText="Date of workout" container="inline" mode="landscape"/>

        <AddExercise />

        <Divider />

        <ExerciseList />

      </div>
    );
  }
}

export default Workout;
