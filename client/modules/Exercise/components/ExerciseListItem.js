/**
 * Created by Daniel on 2017-04-11.
 */
import React from "react";
import PropTypes from "prop-types";
import AddSet from "../../Set/components/AddSet";
import SetList from "../../Set/components/SetList";
import IconButton from 'material-ui/IconButton';
import ContentRemoveCircle from "material-ui/svg-icons/content/remove-circle-outline";
import {Col, Row} from "react-flexbox-grid";
// https://github.com/callemall/material-ui/issues/3543 to stop selecting both row and item in LIST

const ExerciseListItem = (props) => (
  <Row middle="xs" style={{marginBottom: 40}}>
    <Col xs={10}>
      <h3>{props.exercise.title}</h3>
    </Col>

    <Col xs={1}>
      <AddSet />
    </Col>
    <Col xs={1}>
      <IconButton
        onTouchTap={props.onDelete}
        tooltip="Delete exercise"
      >
        <ContentRemoveCircle />
      </IconButton>
    </Col>
    <SetList sets={props.exercise.sets}/>
  </Row>
);

ExerciseListItem.propTypes = {
  exercise: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sets: PropTypes.array.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default ExerciseListItem;
