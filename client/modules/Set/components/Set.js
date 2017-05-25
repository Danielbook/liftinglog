import React, {Component} from "react";
import PropTypes from "prop-types";
import TextField from 'material-ui/TextField';
import {Col, Row} from "react-flexbox-grid";
import IconButton from 'material-ui/IconButton';
import NavigationClose from "material-ui/svg-icons/navigation/close";
import ContentRemoveCircle from "material-ui/svg-icons/content/remove-circle-outline";
import Slider from 'material-ui/Slider';

class Set extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rpe: props.rpe
    }
  }

  handleRpeSlider = (event, value) => {
    console.log(value);
    this.setState({rpe: value});
  };

  render() {
    return(
      <Row around="xs">
        <Col xs={2}>
          <TextField
            floatingLabelText="Weight"
          />
        </Col>
        <Col xs={1}>
          <IconButton
            disabled={true}
            size={20}
          >
            <NavigationClose/>
          </IconButton>
        </Col>
        <Col xs={2}>
          <TextField
            floatingLabelText="Reps"
          />
        </Col>
        <Col xs={1}>
          @
        </Col>
        <Col xs={2}>
          <Row>
            <Slider
              min={5.5}
              max={10}
              step={0.5}
              value={this.state.rpe}
              onChange={this.handleRpeSlider}
            />
          </Row>
          <Row>
            {this.state.rpe}
          </Row>
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
  rpe: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default Set;
