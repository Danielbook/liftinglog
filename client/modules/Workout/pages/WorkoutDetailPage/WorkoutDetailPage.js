import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Helmet from "react-helmet";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import Divider from "material-ui/Divider";
import RaisedButton from "material-ui/RaisedButton";
import NavigationChevronLeft from "material-ui/svg-icons/navigation/chevron-left";
import {browserHistory} from "react-router";
// Import Actions
// Import Selectors
import {getWorkout} from "../../WorkoutReducer";
import AddExercise from "../../../../components/Exercise/AddExercise";
import ExerciseList from "../../../../components/Exercise/ExerciseList";
import {
  addExerciseRequest,
  deleteExerciseRequest,
  fetchExercises
} from "../../../../components/Exercise/ExerciseActions";
import {fetchWorkout} from "../../WorkoutActions";
import {getExercises} from "../../../../components/Exercise/ExerciseReducers";

class WorkoutDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchExercises(this.props.workout.cuid));
  }

  handleDeleteExercise = (exercise) => {
    if (confirm('Do you want to delete this exercise')) { // eslint-disable-line
      this.props.dispatch(deleteExerciseRequest(exercise));
    }
  };

  handleAddExercise = (title) => {
    let cuid = this.props.workout.cuid;
    this.props.dispatch(addExerciseRequest({title, cuid}));
  };

  render() {
    return (
      <div>
        <Helmet title={this.props.workout.title}/>
        <RaisedButton
          onTouchTap={browserHistory.goBack}
          style={{marginTop: 20}}
          icon={<NavigationChevronLeft />}
        />

        <TextField
          value={this.props.workout.title}
          hintText=""
          floatingLabelText="Name of workout"/>

        <DatePicker hintText="Date of workout" container="inline" mode="landscape"/>


        <AddExercise addExercise={this.handleAddExercise}/>

        <Divider />

        <ExerciseList exercises={this.props.exercises} handleDeleteWorkout={this.handleDeleteExercise}/>

      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
WorkoutDetailPage.need = [params => {
  return fetchWorkout(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    workout: getWorkout(state, props.params.cuid),
    exercises: getExercises(state)
  };
}

WorkoutDetailPage.propTypes = {
  workout:  PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug:  PropTypes.string.isRequired,
    cuid:  PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WorkoutDetailPage);
