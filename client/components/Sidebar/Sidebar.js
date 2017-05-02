import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {getsidebarOpen, getUserName} from "../../modules/App/AppReducer";
// Material UI Components
import Drawer from "material-ui/Drawer";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Subheader from "material-ui/Subheader";
import Avatar from "material-ui/Avatar";
// Material UI Icons
import ActionHome from "material-ui/svg-icons/action/home";
import ActionToday from "material-ui/svg-icons/action/today";
import ActionTrendingup from "material-ui/svg-icons/action/trending-up";
import ActionSettings from "material-ui/svg-icons/action/settings";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Drawer
        docked={true}
        open={this.props.sidebar}
        onRequestChange={(open) => this.setState({open})}
      >
        <List>
          <Subheader>{this.props.userName}</Subheader>

          {
            this.props.userName === '' ? null :
              <ListItem disabled={true}>
                <Avatar>{this.props.userName.charAt(0)}</Avatar>
              </ListItem>
          }

          <ListItem containerElement={<Link to="/"/>} primaryText="Home" leftIcon={<ActionHome />}/>
          <ListItem containerElement={<Link to="/workouts"/>} primaryText="Workouts" leftIcon={<ActionToday />}/>
          <ListItem containerElement={<Link to="/stats"/>} primaryText="Stats" leftIcon={<ActionTrendingup />}/>
          <ListItem containerElement={<Link to="/settings"/>} primaryText="Settings" leftIcon={<ActionSettings />}/>
        </List>
      </Drawer>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    userName: getUserName(state),
    sidebar:  getsidebarOpen(state),
  };
}

export default connect(mapStateToProps)(Sidebar);
