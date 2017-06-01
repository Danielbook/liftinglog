import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { Row } from 'react-flexbox-grid';

const DashboardPage = (props) => (
  <div>
    <Row center="xs" style={{ paddingTop: 20, paddingBottom: 20 }}>
      <h1>Home</h1>
    </Row>

    <Card className="container">
      <CardTitle
        title={'Welcome ' + props.userName}
        subtitle="Your personal records"
      />
      <CardText>
        <List>
          <ListItem disabled>Squat: {props.userSquatMax} kg</ListItem>
          <ListItem disabled>Bench press: {props.userBenchMax} kg</ListItem>
          <ListItem disabled>Deadlift: {props.userDeadliftMax} kg</ListItem>
        </List>
      </CardText>
    </Card>
  </div>
);

DashboardPage.propTypes = {
  userName: PropTypes.string.isRequired,
  userSquatMax: PropTypes.number,
  userBenchMax: PropTypes.number,
  userDeadliftMax: PropTypes.number,
};

export default DashboardPage;
