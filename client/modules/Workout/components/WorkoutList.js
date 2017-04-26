/**
 * Created by Daniel on 2017-04-11.
 */
import React from "react";
import PropTypes from "prop-types";
import WorkoutListItem from "./WorkoutListItem/WorkoutListItem";
// import {connect} from "react-redux";
// import PropTypes from "prop-types";
// import {List, ListItem} from "material-ui/List";

function WorkoutList(props) {
  return (
    <div>
      {
        props.workouts.map(workout => (
          <WorkoutListItem
            workout={workout}
            key={workout.cuid}
            onDelete={() => props.handleDeletePost(workout.cuid)}
          />
        ))
      }
    </div>
  );
}

WorkoutList.propTypes = {
  workouts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default WorkoutList;

// const styles = {
//   propContainer:    {
//     width:    200,
//     overflow: 'hidden',
//     margin:   '20px auto 0',
//   },
//   propToggleHeader: {
//     margin: '20px auto 10px',
//   },
// };
//
// const WorkoutList = ({workouts}) => (
//   <List>
//     {workouts.map(workout =>
//       <ListItem
//         key={workout.id}
//         onClick={() => console.log(workout.id)}
//       >
//         {workout.name}
//       </ListItem>
//     )}
//   </List>
// );

// WorkoutList.propTypes = {
//   workouts:       PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//   }).isRequired).isRequired,
// };
//
// const mapStateToProps = (state) => {
//   return {
//     workouts: state.workouts
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onWorkoutClick: (id) => {
//       dispatch(goToWorkout(id))
//     }
//   }
// };

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps
// )(WorkoutList);
