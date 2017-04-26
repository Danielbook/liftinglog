import React, {Component} from "react";
import PropTypes from "prop-types";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";

export class AddWorkout extends Component {
  addWorkout = () => {
    const titleRef = this.refs.title;
    if (this.name) {
      this.props.addWorkout(this.name);
      // titleRef.value = '';
    }
  };

  onUpdate = (value) => {
    this.name = value;
  };

  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Workout Name"
          onChange={this.onUpdate}
        />
        <FloatingActionButton
          style={{marginLeft: 20}}
          type="submit"
          onTouchTap={this.addWorkout}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
      ;
  }
}

AddWorkout.propTypes = {
  addWorkout: PropTypes.func.isRequired,
};

export default AddWorkout;

