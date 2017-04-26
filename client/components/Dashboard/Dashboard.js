import React from 'react';
import PropTypes from "prop-types";
import { Card, CardTitle, CardText } from 'material-ui/Card';
import WorkoutList from '../../modules/Workout/components/WorkoutList'
import AddWorkout from "../../modules/Workout/components/AddWorkout/AddWorkout";

const Dashboard = ({ secretData }) => (
  <div>
    <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
      {/*<AddWorkout />*/}

      {/*<WorkoutList />*/}
  </Card>
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
