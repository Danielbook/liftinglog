import React, {Component} from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Welcome, please login or sign up!</h1>
      </div>
    );
  }
}

export default Home;

