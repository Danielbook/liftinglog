import React, {Component} from "react";
import { connect } from 'react-redux'

import DatePicker from "material-ui/DatePicker";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";
import AutoComplete from "material-ui/AutoComplete";

import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import AddExercise from '../Exercise/AddExercise'
import ExerciseListVisible from '../Exercise/ExerciseListVisible'


class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    }
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div>
        <TextField hintText="Name of workout" underlineShow={false}/>
        <DatePicker hintText="Date of workout" container="inline" mode="landscape"/>

        {/*<div>*/}
          {/*<AutoComplete*/}
            {/*hintText="Exercise"*/}
            {/*dataSource={this.state.dataSource}*/}
            {/*onUpdateInput={this.handleUpdateInput}*/}
          {/*/>*/}
          {/*<FloatingActionButton*/}
            {/*mini={true}*/}
            {/*secondary={true}*/}
            {/*style={{marginLeft: 20}}*/}
          {/*>*/}
            {/*<ContentAdd />*/}
          {/*</FloatingActionButton>*/}
        {/*</div>*/}

        <AddExercise />

        <Divider />

        <ExerciseListVisible />

      </div>
    );
  }
}

export default Workout;
