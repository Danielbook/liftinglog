/**
 * Created by Daniel on 2017-04-26.
 */
import React from "react";
import PropTypes from "prop-types";
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

const Set = () => (
  <div style={{flex: 1, flexDirection: 'row'}}>
    <TextField
      floatingLabelText="Weight"
    />
    <TextField
      floatingLabelText="Reps"
    />
  </div>
);

Set.propTypes = {
};


export default Set;
