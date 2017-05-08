import React from "react";
import PropTypes from "prop-types";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentRemove from "material-ui/svg-icons/content/remove";

import {Link} from "react-router";
import {Col, Row} from "react-flexbox-grid";

function WorkoutListItem(props) {
  return (
    <Row style={{paddingBottom: 20}}>
      <Col xs={10}>
        <Link to={`/workouts/${props.workout.slug}-${props.workout.cuid}`}>
          {props.workout.title}
        </Link>
      </Col>
      <Col xs={2}>
        <FloatingActionButton
          mini={true}
          secondary={true}
          onTouchTap={props.onDelete}
        >
          <ContentRemove />
        </FloatingActionButton>
      </Col>
    </Row>
  );
}

WorkoutListItem.propTypes = {
  workout:  PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug:  PropTypes.string.isRequired,
    cuid:  PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default WorkoutListItem;
