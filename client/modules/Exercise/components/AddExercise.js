/**
 * Created by Daniel on 2017-04-11.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import TextField from "material-ui/TextField";

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
      <div>
        <TextField
          floatingLabelText="Exercise Name"
          onChange={e => this.setState({title: e.target.value})}
        />
        <FloatingActionButton onTouchTap={this.addExercise} mini={true}>
          <ContentAdd/>
        </FloatingActionButton>
      </div>
    );
  }
}


AddExercise.propTypes = {
  addExercise: PropTypes.func.isRequired,
};

export default AddExercise;
