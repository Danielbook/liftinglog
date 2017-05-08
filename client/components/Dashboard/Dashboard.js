import React from "react";
import PropTypes from "prop-types";
import {Card, CardText, CardTitle} from "material-ui/Card";

const Dashboard = ({secretData}) => (
  <Card className="container">
    <CardTitle
      className="item"
      title="Dashboard"
    />
    {secretData && <CardText style={{fontSize: '16px', color: 'green'}}>{secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
