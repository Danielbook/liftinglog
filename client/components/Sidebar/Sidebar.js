import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {getSidebarOpen, getUserName} from "../../modules/App/AppReducer";
import Drawer from "material-ui/Drawer";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Subheader from "material-ui/Subheader";
import Avatar from "material-ui/Avatar";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import ActionHome from "material-ui/svg-icons/action/home";
import ActionToday from "material-ui/svg-icons/action/today";
import ActionTrendingUp from "material-ui/svg-icons/action/trending-up";
import ActionSettings from "material-ui/svg-icons/action/settings";
import {Divider} from "material-ui";
import {Col, Row} from "react-flexbox-grid";
import IconButton from "material-ui/IconButton";
import {grey800, grey500} from 'material-ui/styles/colors';

class Sidebar extends Component {
  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.sidebar}
        onRequestChange={this.props.handleToggle}
        disableSwipeToOpen={true}
      >
        <List>
          <Row end="xs">
            <Col xs>
              <IconButton >
                <NavigationClose color={grey800} hoverColor={grey500} onTouchTap={this.props.handleToggle}/>
              </IconButton>
            </Col>
          </Row>
          <Subheader>
            <Row center="xs">
              <ListItem disabled={true}>
                <Avatar size={70}>
                  {this.props.userName.charAt(0)}
                </Avatar>
              </ListItem>
            </Row>
            <Row center="xs">
              {this.props.userName}
            </Row>
          </Subheader>

          <Divider />

          <ListItem onTouchTap={this.props.handleToggle}
                    containerElement={<Link to="/"/>}
                    primaryText="Home"
                    leftIcon={<ActionHome />}
          />
          <ListItem onTouchTap={this.props.handleToggle}
                    containerElement={<Link to="/workouts"/>}
                    primaryText="Workouts"
                    leftIcon={<ActionToday />}
          />
          <ListItem onTouchTap={this.props.handleToggle}
                    containerElement={<Link to="/stats"/>}
                    primaryText="Stats"
                    leftIcon={<ActionTrendingUp />}
          />
          <ListItem onTouchTap={this.props.handleToggle}
                    containerElement={<Link to="/settings"/>}
                    primaryText="Settings"
                    leftIcon={<ActionSettings />}
          />
        </List>
      </Drawer>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    userName: getUserName(state),
    sidebar: getSidebarOpen(state),
  };
}

export default connect(mapStateToProps)(Sidebar);
