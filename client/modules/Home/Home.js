/**
 * Created by Daniel on 2017-04-11.
 */
import React, {Component} from "react";
import {Link} from "react-router";

// Material UI Icons
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
        New Workout
        <FloatingActionButton
          containerElement={<Link to="/workout"/>}
          style={{marginLeft: 20}}
        >
          <ContentAdd />
        </FloatingActionButton>
      </h1>
      </div>
    );
  }
}

export default Home;

