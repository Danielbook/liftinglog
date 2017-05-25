import React from "react";
import PropTypes from "prop-types";
import {List, ListItem} from "material-ui/List";
import {Card} from "material-ui/Card";
import {Row} from "react-flexbox-grid";

const Dashboard = (props) => (
  <div>
    <Row center="xs" style={{paddingTop: 20, paddingBottom: 20}}>
      <h1>Home</h1>
    </Row>

    <Card>
      <List>
        <ListItem disabled={true}>Squat: {props.squat}</ListItem>
        <ListItem disabled={true}>Bench press: {props.bench}</ListItem>
        <ListItem disabled={true}>Deadlift: {props.deadlift}</ListItem>
      </List>
    </Card>
  </div>
);

Dashboard.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Dashboard;
