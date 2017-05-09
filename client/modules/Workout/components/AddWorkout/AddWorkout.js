import React, {Component} from "react";
import PropTypes from "prop-types";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";
import {Col, Row} from "react-flexbox-grid";

export class AddWorkout extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    }
  }

  addWorkout = () => {
    if (this.state.title !== "") {
      this.props.addWorkout(this.state.title);
    }
  };

  render() {
    return (
      <Row>
        <Col xs={9}>
          <TextField
            floatingLabelText="Workout Name"
            onChange={e => this.setState({title: e.target.value})}
          />
        </Col>
        <Col xs={3}>
          <FloatingActionButton
            style={{marginLeft: 40}}
            type="submit"
            onTouchTap={this.addWorkout}
          >
            <ContentAdd />
          </FloatingActionButton>
        </Col>
      </Row>
    );
  }
}

AddWorkout.propTypes = {
  addWorkout: PropTypes.func.isRequired,
};

export default AddWorkout;

