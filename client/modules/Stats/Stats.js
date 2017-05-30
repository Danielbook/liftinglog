import React, {Component} from "react";
import StatsPage from "./StatsPage";
import {Card, CardTitle} from "material-ui/Card";
import {Col, Row} from "react-flexbox-grid";

class Stats extends Component {

  render() {
    return (
      <div>
        <Row center="xs" style={{paddingTop: 20, paddingBottom: 20}}>
          <h1>Stats</h1>
        </Row>
        <Card className="container">
          <CardTitle
            title="Your current stats"
          />
          <Row>
            <Col xs>
              <StatsPage />
            </Col>
            <Col xs>
              <StatsPage />
            </Col>
            <Col xs>
              <StatsPage />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
export default Stats
