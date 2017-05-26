import React, {Component} from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import {Col, Row} from "react-flexbox-grid";
import IconButton from "material-ui/IconButton";
import ContentRemoveCircle from "material-ui/svg-icons/content/remove-circle-outline";

class Set extends Component {

  onChangeWeight = (event, value) => {
    console.log(value);
  };

  onChangeReps = (event, value) => {
    console.log(value);
  };

  onChangeRPE = (event, value) => {
    console.log(value);
  };

  render() {
    return (
      <Row middle="xs" around="xs">
        <Col xs={3}>
          <TextField
            defaultValue={this.props.weight}
            onChange={this.onChangeWeight}
            floatingLabelText="Weight"
          />
        </Col>
        <Col xs={3}>
          <TextField
            defaultValue={this.props.reps}
            onChange={this.onChangeReps}
            floatingLabelText="Reps"
          />
        </Col>
        <Col xs={3}>
          <TextField
            defaultValue={this.props.rpe}
            onChange={this.onChangeRPE}
            floatingLabelText="RPE"
          />
        </Col>
        <Col xs={1}>
          <IconButton
            onTouchTap={this.props.onDelete}
            tooltip="Delete set"
          >
            <ContentRemoveCircle />
          </IconButton>
        </Col>
      </Row>
    );
  }
}

Set.propTypes = {
  weight: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired,
  rpe: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default Set;
