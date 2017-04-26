import React from 'react';
import PropTypes from "prop-types";
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {Link} from "react-router";
import WorkoutListVisible from '../Workout/WorkoutListVisible'
// Material UI Icons
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import AddWorkout from "../Workout/AddWorkout";

const Dashboard = ({ secretData }) => (
  <div>
    <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
      {/*<h1>*/}
        {/*New Workout*/}
        {/*<FloatingActionButton*/}
          {/*containerElement={<Link to="/workout"/>}*/}
          {/*style={{marginLeft: 20}}*/}
        {/*>*/}
          {/*<ContentAdd />*/}
        {/*</FloatingActionButton>*/}
      {/*</h1>*/}

      <AddWorkout />

      <WorkoutListVisible />
  </Card>
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
