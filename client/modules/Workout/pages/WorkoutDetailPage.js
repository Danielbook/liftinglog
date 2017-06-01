import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import { browserHistory } from 'react-router';
import { getWorkout } from '../WorkoutReducer';
import AddExercise from '../../Exercise/components/AddExercise';
import ExerciseList from '../../Exercise/components/ExerciseList';
import { addExerciseRequest, deleteExerciseRequest } from '../../Exercise/ExerciseActions';
import { fetchWorkout, updateWorkoutRequest } from '../WorkoutActions';
import { addSetRequest, deleteSetRequest } from '../../Set/SetActions';
import { Col, Row } from 'react-flexbox-grid';

class WorkoutDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      date: props.date,
    };
  }

  handleAddExercise = (title) => {
    let cuid = this.props.workout.cuid;
    this.props.dispatch(addExerciseRequest({ title, cuid }));
  };

  handleDeleteExercise = (exercise) => {
    if (confirm('Do you want to delete this exercise')) { // eslint-disable-line
      this.props.dispatch(deleteExerciseRequest(exercise));
    }
  };

  handleAddSet = (cuid) => {
    this.props.dispatch(addSetRequest({ cuid }));
  };

  handleDeleteSet = (set) => {
    console.log('Function: ' + set);
    if (confirm('Do you want to delete this set')) { // eslint-disable-line
      this.props.dispatch(deleteSetRequest(set));
    }
  };

  updateTitle = (event, value) => {
    this.setState({ title: value });
  };

  onUpdateWorkoutTitle = () => {
    if (this.state.title !== this.props.workout.title) {
      const cuid = this.props.workout.cuid;
      const newValue = this.state.title;
      this.props.dispatch(updateWorkoutRequest({ newValue, cuid }));
    }
  };

  // TODO fix the changing of dates!
  onUpdateWorkoutDate = (event, value) => {
    // const cuid = this.props.workout.cuid;
    // const newValue = new Date(value);
    // this.props.dispatch(updateWorkoutRequest({newValue, cuid}));
  };

  render() {
    return (
      <div>
        <Helmet title={this.props.workout.title} />
        <Row>
          <RaisedButton
            onTouchTap={browserHistory.goBack}
            style={{ marginTop: 20 }}
            icon={<NavigationChevronLeft />}
          />
        </Row>
        <Row around="md">
          <Col md={2}>
            <TextField
              defaultValue={this.props.workout.title}
              hintText=""
              floatingLabelText="Name of workout"
              onChange={this.updateTitle}
              onBlur={this.onUpdateWorkoutTitle}
            />
          </Col>
          <Col md={2}>
            <DatePicker
              floatingLabelText="Date of workout"
              container="inline"
              mode="landscape"
              onChange={this.onUpdateWorkoutDate}
            />
          </Col>
          <Col md={2}>
            <AddExercise addExercise={this.handleAddExercise} />
          </Col>
        </Row>

        <Divider style={{ marginTop: 20, marginBottom: 20 }} />

        <ExerciseList exercises={this.props.workout.exercises}
          handleAddSet={this.handleAddSet}
          handleDeleteSet={this.handleDeleteSet}
          handleDeleteWorkout={this.handleDeleteExercise}
        />
      </div>
    );
  }


}

// Actions required to provide data for this components to render in sever side.
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
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    // date: PropTypes.instanceOf(Date),
    exercises: PropTypes.array.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WorkoutDetailPage);
