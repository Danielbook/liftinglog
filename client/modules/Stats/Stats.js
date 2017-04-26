import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Stats extends React.Component {

  render() {
    return (
      <div>
      <h1>Stats</h1>

        <RaisedButton label="Set new 1RM maxes" primary={true} style={style} />
      </div>
    );
  }
}
export default Stats
