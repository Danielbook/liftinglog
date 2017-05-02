import React, {Component} from "react";
import PropTypes from "prop-types";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";

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
      <div>
        <TextField
          floatingLabelText="Workout Name"
          onChange={e => this.setState({title: e.target.value})}
        />
        <FloatingActionButton
          style={{marginLeft: 20}}
          type="submit"
          onTouchTap={this.addWorkout}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

AddWorkout.propTypes = {
  addWorkout: PropTypes.func.isRequired,
};

export default AddWorkout;

