import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import {List, ListItem} from "material-ui/List";
import {Card, CardTitle} from "material-ui/Card";

const style = {
  margin: 12,
};

class Stats extends React.Component {

  render() {
    return (
      <Card className="container">
        <CardTitle
          title="One rep maxes"
        />
        <List>
          <ListItem disabled={true}>Squat</ListItem>
          <ListItem disabled={true}>Bench press</ListItem>
          <ListItem disabled={true}>Deadlift</ListItem>
        </List>
        <RaisedButton label="Set new 1RM maxes" primary={true} style={style}/>
      </Card>
    );
  }
}
export default Stats
