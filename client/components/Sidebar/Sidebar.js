import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { Link } from 'react-router';
import {getsidebarOpen} from "../../modules/App/AppReducer";

// Material UI Components
import Drawer from "material-ui/Drawer";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Subheader from "material-ui/Subheader";
import Avatar from "material-ui/Avatar";

// Material UI Icons
import ContentSend from "material-ui/svg-icons/content/send";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";
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
          <Subheader>Navigation</Subheader>
          <ListItem
            disabled={true}
          >
            <Avatar>D</Avatar>
          </ListItem>
          <ListItem containerElement={<Link to="/" />} primaryText="Home" leftIcon={<ActionHome />}/>
          <ListItem containerElement={<Link to="/workouts" />} primaryText="Workouts" leftIcon={<ActionToday />}/>
          <ListItem containerElement={<Link to="/stats" />} primaryText="Stats" leftIcon={<ActionTrendingup />}/>
          <ListItem containerElement={<Link to="/settings" />} primaryText="Settings" leftIcon={<ActionSettings />}/>

          {/*<ListItem primaryText="Sent mail" leftIcon={<ContentSend />}/>*/}
          {/*<ListItem primaryText="Drafts" leftIcon={<ContentDrafts />}/>*/}
          {/*<ListItem*/}
            {/*primaryText="Inbox"*/}
            {/*leftIcon={<ContentInbox />}*/}
            {/*initiallyOpen={true}*/}
            {/*primaryTogglesNestedList={true}*/}
            {/*nestedItems={[*/}
              {/*<ListItem*/}
                {/*key={1}*/}
                {/*primaryText="Starred"*/}
                {/*leftIcon={<ActionGrade />}*/}
              {/*/>,*/}
              {/*<ListItem*/}
                {/*key={2}*/}
                {/*primaryText="Sent Mail"*/}
                {/*leftIcon={<ContentSend />}*/}
                {/*disabled={true}*/}
                {/*nestedItems={[*/}
                  {/*<ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />}/>,*/}
                {/*]}*/}
              {/*/>,*/}
              {/*<ListItem*/}
                {/*key={3}*/}
                {/*primaryText="Inbox"*/}
                {/*leftIcon={<ContentInbox />}*/}
                {/*open={this.props.sidebar}*/}
                {/*onNestedListToggle={this.handleNestedListToggle}*/}
                {/*nestedItems={[*/}
                  {/*<ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />}/>,*/}
                {/*]}*/}
              {/*/>,*/}
            {/*]}*/}
          {/*/>*/}
        </List>
      </Drawer>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    sidebar: getsidebarOpen(store),
  };
}

export default connect(mapStateToProps)(Sidebar);
