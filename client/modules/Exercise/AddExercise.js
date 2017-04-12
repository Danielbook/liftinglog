/**
 * Created by Daniel on 2017-04-11.
 */
import React from "react";
import {connect} from "react-redux";
import {addExercise} from "./ExerciseActions";

import AutoComplete from 'material-ui/AutoComplete';


let AddExercise = ({dispatch}) => {
  let input;

  return (
    <div>

      {/*<AutoComplete*/}
        {/*hintText="Exercise"*/}
        {/*dataSource={this.state.dataSource}*/}
        {/*onUpdateInput={this.handleUpdateInput}*/}
      {/*/>*/}

      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addExercise(input.value));
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }}/>
        <button type="submit">
          Add Exercise
        </button>
      </form>
    </div>
  )
};

AddExercise = connect()(AddExercise);

export default AddExercise;
