import React from "react";
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
import {fetchWorkout} from "../../WorkoutActions";
// Import Selectors
import {getWorkout} from "../../WorkoutReducer";
import AddExercise from "../../../../components/Exercise/AddExercise";
import ExerciseList from "../../../../components/Exercise/ExerciseList";
import {Row} from "react-flexbox-grid";

export function WorkoutDetailPage(props) {
  return (
    <div>
      <Helmet title={props.workout.title}/>
        <RaisedButton
          onTouchTap={browserHistory.goBack}
          style={{marginTop: 20}}
          icon={<NavigationChevronLeft />}
        />
      <Row>
      <TextField
        value={props.workout.title}
        hintText=""
        floatingLabelText="Name of workout"/>

      <DatePicker hintText="Date of workout" container="inline" mode="landscape"/>

      </Row>

      <AddExercise />

      <Divider />

      <ExerciseList />

    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
WorkoutDetailPage.need = [params => {
  return fetchWorkout(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    workout: getWorkout(state, props.params.cuid),
  };
}

WorkoutDetailPage.propTypes = {
  workout: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug:  PropTypes.string.isRequired,
    cuid:  PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(WorkoutDetailPage);
