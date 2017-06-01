import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stats from '../components/Stats';
import { Card, CardTitle } from 'material-ui/Card';
import { Col, Row } from 'react-flexbox-grid';
import { getMaxes } from '../StatsActions';
import { getUserMaxBench, getUserMaxDeadlifts, getUserMaxSquats } from '../StatsReducer';

class StatsPage extends Component {

  componentDidMount() {
    this.props.dispatch(getMaxes());
  }

  render() {
    return (
      <div>
        <Row center="xs" style={{ paddingTop: 20, paddingBottom: 20 }}>
          <h1>Stats</h1>
        </Row>
        <Card className="container">
          <CardTitle
            title="Your current stats"
          />
          <Row>
            <Col xs>
              <Stats exercise="Squat" maxes={this.props.userSquats} />
            </Col>
            <Col xs>
              <Stats exercise="Bench Press" maxes={this.props.userBench} />
            </Col>
            <Col xs>
              <Stats exercise="Deadlifts" maxes={this.props.userDeadlifts} />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    userSquats: getUserMaxSquats(state),
    userBench: getUserMaxBench(state),
    userDeadlifts: getUserMaxDeadlifts(state),
  };
}

export default connect(mapStateToProps)(StatsPage);
