/**
 * Created by Daniel on 2017-04-11.
 */
import React, { PropTypes } from 'react'
import Exercise from './Exercise'
import {List, makeSelectable} from 'material-ui/List'

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

let SelectableList = makeSelectable(List);

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const ExerciseList = ({ exercises, onExerciseClick }) => (
  <SelectableList>
    {exercises.map(exercise =>
      <Exercise
        key={exercise.id}
        {...exercise}
        onClick={() => onExerciseClick(exercise.id)}
      />
    )}
  </SelectableList>
);

ExerciseList.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onExerciseClick: PropTypes.func.isRequired
};

export default ExerciseList
