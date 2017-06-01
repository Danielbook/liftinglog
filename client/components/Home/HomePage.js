import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const HomePage = () => (
  <div style={{ height: '100%' }}>
    <Row center="xs" style={{ paddingTop: '20px' }}>
      <h1>Welcome to Lifting Log</h1>
    </Row>
    <Row center="xs" style={{ paddingTop: '10px' }}>
      <h4>Please sign up if you already do not have an account</h4>
    </Row>
    <Row center="xs" style={{ paddingTop: '30px' }}>
      <Col xs={5}>
        <RaisedButton
          containerElement={<Link to="/signup" />}
          label="Sign Up"
          primary
        />
      </Col>
      <Col xs={5}>
        <RaisedButton
          containerElement={<Link to="/login" />}
          label="Log in"
          primary
        />
      </Col>
    </Row>
  </div>
);

export default HomePage;

