import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {Link} from "react-router";
// Material UI Icons
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

const Dashboard = ({ secretData }) => (
  <div>
    <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}

  </Card>
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

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
