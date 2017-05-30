import React, {Component} from "react";
import PropTypes from "prop-types";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";
import {Col, Row} from "react-flexbox-grid";

export class AddExercise extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    }
  }

  addExercise = () => {
    if (this.state.title !== "") {
      this.props.addExercise(this.state.title);
    }
  };

  render() {
    return (
      <Row middle="xs">
        <Col xs={9}>
          <TextField
            floatingLabelText="Exercise"
            onChange={e => this.setState({title: e.target.value})}
          />
        </Col>
        <Col xs={3}>
          <FloatingActionButton onTouchTap={this.addExercise} mini={true}>
            <ContentAdd/>
          </FloatingActionButton>
        </Col>
      </Row>
    );
  }
}


AddExercise.propTypes = {
  addExercise: PropTypes.func.isRequired,
};

export default AddExercise;
