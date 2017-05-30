import React from "react";
import PropTypes from "prop-types";
import {List, ListItem} from "material-ui/List";
import {Card, CardText, CardTitle} from "material-ui/Card";
import {Row} from "react-flexbox-grid";

const DashboardPage = (props) => (
  <div>
    <Row center="xs" style={{paddingTop: 20, paddingBottom: 20}}>
      <h1>Home</h1>
    </Row>

    <Card className="container">
      <CardTitle
        title={"Welcome " + props.userName}
        subtitle="Your personal records"/>
      <CardText>
        <List>
          <ListItem disabled={true}>Squat: {props.userMaxes.userSquats} kg</ListItem>
          <ListItem disabled={true}>Bench press: {props.userMaxes.userBench} kg</ListItem>
          <ListItem disabled={true}>Deadlift: {props.userMaxes.userDeadlifts} kg</ListItem>
        </List>

      </CardText>
    </Card>
  </div>
);

DashboardPage.propTypes = {
  userName: PropTypes.string.isRequired,
  userMaxes: PropTypes.shape(({
    userSquats: PropTypes.number.isRequired,
    userBench: PropTypes.number.isRequired,
    userDeadlifts: PropTypes.number.isRequired,
  })).isRequired,
};

export default DashboardPage;
