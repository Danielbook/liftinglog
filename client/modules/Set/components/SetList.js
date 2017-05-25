/**
 * Created by Daniel on 2017-04-11.
 */
import React from 'react';
import PropTypes from "prop-types";
import Set from "./Set";

const SetList = (props) => (
  <div>
    {props.sets.map(set =>
      <Set
        key={set.cuid}
        {...set}
        onDelete={() => props.handleDeleteSet(set)}
      />
    )}
  </div>
);

SetList.propTypes = {
  handleDeleteSet: PropTypes.func.isRequired,
};

export default SetList;
