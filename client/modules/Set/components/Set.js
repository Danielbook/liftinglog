import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { Col, Row } from 'react-flexbox-grid';
import IconButton from 'material-ui/IconButton';
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle-outline';
import { updateSet } from '../SetActions';

class Set extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
    };
  }

  onUpdateSet = () => {
    const set = { ...this.state };
    this.props.dispatch(updateSet({ set }));
  };

  onChangeWeight = (event, value) => {
    this.setState({ weight: parseFloat(value) });
  };

  onChangeReps = (event, value) => {
    this.setState({ reps: parseFloat(value) });
  };

  onChangeRPE = (event, value) => {
    this.setState({ rpe: parseFloat(value) });
  };

  render() {
    return (
      <Row middle="xs" around="xs">
        <Col xs={3}>
          <TextField
            defaultValue={this.props.weight}
            onChange={this.onChangeWeight}
            onBlur={this.onUpdateSet}
            floatingLabelText="Weight"
          />
        </Col>
        <Col xs={3}>
          <TextField
            defaultValue={this.props.reps}
            onChange={this.onChangeReps}
            onBlur={this.onUpdateSet}
            floatingLabelText="Reps"
          />
        </Col>
        <Col xs={3}>
          <TextField
            defaultValue={this.props.rpe}
            onChange={this.onChangeRPE}
            onBlur={this.onUpdateSet}
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


export default connect()(Set);
