import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import WorkoutList from '../../components/WorkoutList';
// import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
import { addWorkoutRequest, fetchWorkouts, deleteWorkoutRequest } from '../../WorkoutActions';
// import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { getShowAddPost } from '../../../App/AppReducer';
import { getWorkouts } from '../../WorkoutReducer';
import AddWorkout from "../../components/AddWorkout/AddWorkout";

class WorkoutListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkouts());
  }

  handleDeletePost = workout => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deleteWorkoutRequest(workout));
    }
  };

  handleAddWorkout = (name) => {
    // this.props.dispatch(toggleAddPost());
    this.props.dispatch(addWorkoutRequest({ name }));
  };

  render() {
    return (
      <div>
        <AddWorkout addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />

        <WorkoutList handleDeletePost={this.handleDeletePost} workouts={this.props.workouts} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
WorkoutListPage.need = [() => { return fetchWorkouts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    workouts: getWorkouts(state),
  };
}

WorkoutListPage.propTypes = {
  workouts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

WorkoutListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(WorkoutListPage);
