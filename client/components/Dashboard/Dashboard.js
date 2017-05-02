import React from "react";
import PropTypes from "prop-types";
import {Card, CardText, CardTitle} from "material-ui/Card";

const Dashboard = ({user, secretData}) => (
  <div>
    <Card className="container">
      <CardTitle
        title="Dashboard"
      />

      {secretData && <CardText style={{fontSize: '16px', color: 'green'}}>{secretData}</CardText>}
    </Card>
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
