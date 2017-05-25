/**
 * Created by Daniel on 2017-04-11.
 */
import React from 'react';
import PropTypes from "prop-types";
import Set from "./Set";
import {Row} from "react-flexbox-grid";

const SetList = (props) => (
  <Row>
    {props.sets.map(set =>
      <Set
        key={set.cuid}
        set={set}
        onDelete={() => props.handleDeleteSet(set)}
      />
    )}
  </Row>
);

SetList.propTypes = {
  handleDeleteSet: PropTypes.func.isRequired,
};

export default SetList;
