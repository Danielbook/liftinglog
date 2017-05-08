import React from "react";
import PropTypes from "prop-types";
import {Card, CardText, CardTitle} from "material-ui/Card";

const Dashboard = ({secretData}) => (
  <Card>
    <CardTitle
      title="Dashboard"
    />
    <CardText style={{fontSize: '16px', color: 'green'}}>{secretData}</CardText>
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
