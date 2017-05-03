/**
 * Created by Daniel on 2017-04-11.
 */
import React from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Set from "./Set";

const mapStateToProps = (state) => {
  return {
    sets: state.sets
  }
};

const SetList = ({ sets }) => (
  <div>
    {sets.map(set =>
      <Set />
    )}
  </div>
);


export default connect(
  mapStateToProps,
)(SetList);
