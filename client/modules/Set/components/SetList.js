/**
 * Created by Daniel on 2017-04-11.
 */
import React from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Set from "./Set";
const SetList = (props) => (
  <div>
    {props.sets.map(set =>
      <Set
        key={props.sets._id}
      />
    )}
  </div>
);

export default SetList;
