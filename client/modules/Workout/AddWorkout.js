/**
 * Created by Daniel on 2017-04-11.
 */
import React from "react";
import {connect} from "react-redux";
import {addWorkout} from "./WorkoutActions";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import {browserHistory} from "react-router";


//TODO Get workout to track its own exercises
let AddWorkout = ({dispatch}) => {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      dispatch(addWorkout("New Workout", Date.now()));
      browserHistory.push('/workout');
    }}>
      {/*<h1>*/}
      {/*New Workout*/}
      {/*<FloatingActionButton*/}
      {/*containerElement={<Link to="/workout"/>}*/}
      {/*style={{marginLeft: 20}}*/}
      {/*>*/}
      {/*<ContentAdd />*/}
      {/*</FloatingActionButton>*/}
      {/*</h1>*/}
      <h1>
        New Workout
        <FloatingActionButton
          style={{marginLeft: 20}}
          type="submit"
        >
          <ContentAdd />
        </FloatingActionButton>
      </h1>
    </form>
  )
};

AddWorkout = connect()(AddWorkout);

export default AddWorkout;
