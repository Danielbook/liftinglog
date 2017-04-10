import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
// Import Components
import Helmet from "react-helmet";
import DevTools from "./components/DevTools";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {toggleAddPost} from "./AppActions";
import RaisedButton from "material-ui/RaisedButton";

import injectTapEventPlugin from "react-tap-event-plugin";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Subheader from "material-ui/Subheader";
import Drawer from "material-ui/Drawer";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import ContentSend from "material-ui/svg-icons/content/send";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";

import styles from "./App.css";
import classnames from "classnames/bind";
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

// require("./App.css");

let cx = classnames.bind(styles);

// import { switchLanguage } from '../../modules/Intl/IntlActions';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login"/>
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh"/>
    <MenuItem primaryText="Help"/>
    <MenuItem primaryText="Sign out"/>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

export class App extends Component {
  constructor(props) {
    super(props);
    //this.handleTouchTap = this.handleTouchTap.bind(this);
    this.state = {
      isMounted: false,
      open:      true,
      logged:    true
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };


  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: true});
  }

  logging = () => console.log(this.state);

  render() {
    let appBarStyle = cx({
      appBar:   true,
      expanded: this.state.open
    });
    let appContentStyle = cx({
      appContent: true,
      expanded:   this.state.open
    });
    return (
      <MuiThemeProvider>
        <div>
          {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
          <Helmet
            title="Lifting Log"
            meta={[
              {charset: 'utf-8'},
              {
                'http-equiv': 'X-UA-Compatible',
                content:      'IE=edge',
              },
              {
                name:    'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <AppBar
            className={appBarStyle}
            onLeftIconButtonTouchTap={this.handleToggle}
            title="Lifting Log"
            iconElementRight={this.state.logged ? <Logged /> : <Login />}
          />
          <Drawer
            docked={true}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <List>
              <Subheader>Nested List Items</Subheader>
              <ListItem primaryText="Sent mail" leftIcon={<ContentSend />}/>
              <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />}/>
              <ListItem
                primaryText="Inbox"
                leftIcon={<ContentInbox />}
                initiallyOpen={true}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="Starred"
                    leftIcon={<ActionGrade />}
                  />,
                  <ListItem
                    key={2}
                    primaryText="Sent Mail"
                    leftIcon={<ContentSend />}
                    disabled={true}
                    nestedItems={[
                      <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />}/>,
                    ]}
                  />,
                  <ListItem
                    key={3}
                    primaryText="Inbox"
                    leftIcon={<ContentInbox />}
                    open={this.state.open}
                    onNestedListToggle={this.handleNestedListToggle}
                    nestedItems={[
                      <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />}/>,
                    ]}
                  />,
                ]}
              />
            </List>

          </Drawer>
          <div className={appContentStyle}>
            { this.props.children }

            <Toggle
              label="Logged"
              defaultToggled={true}
              onToggle={this.handleChange}
              labelPosition="right"
              style={{margin: 20}}
            />
            <RaisedButton
              label="Toggle Drawer"
              onTouchTap={this.handleToggle}
            />
            <RaisedButton
              label="Log state"
              onTouchTap={this.logging}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl:     PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
