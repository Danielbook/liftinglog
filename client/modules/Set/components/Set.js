import React from "react";
import PropTypes from "prop-types";
import TextField from 'material-ui/TextField';
import {Col, Row} from "react-flexbox-grid";
import IconButton from 'material-ui/IconButton';
import ContentRemoveCircle from "material-ui/svg-icons/content/remove-circle-outline";

const Set = (props) => (
  <Row around="xs">
    <Col xs={2}>
      <TextField
        floatingLabelText="Weight"
      />
    </Col>
    <Col xs={2}>
      <TextField
        floatingLabelText="Reps"
      />
    </Col>
    <Col xs={2}>
      <TextField
        floatingLabelText="RPE"
      />
    </Col>
    <Col xs={1}>
      <IconButton
        onTouchTap={props.onDelete}
        tooltip="Delete set"
      >
        <ContentRemoveCircle />
      </IconButton>
    </Col>
  </Row>
);

Set.propTypes = {
  onDelete: PropTypes.func.isRequired,
};


export default Set;
