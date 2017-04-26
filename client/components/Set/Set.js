/**
 * Created by Daniel on 2017-04-26.
 */
import React from "react";
import PropTypes from "prop-types";
import TextField from 'material-ui/TextField';

const Set = ({id}) => (
  <div>
    <TextField
      floatingLabelText="Weight"
    />
    <TextField
      floatingLabelText="Reps"
    />
  </div>
);

Set.propTypes = {
  id:           PropTypes.number.isRequired,
};


export default Set;
