import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
// Import Components
import Helmet from "react-helmet";
import DevTools from "./components/DevTools";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {toggleAddPost, toggleSidebar} from "./AppActions";
import {getsidebarOpen} from "./AppReducer";
import RaisedButton from "material-ui/RaisedButton";

import injectTapEventPlugin from "react-tap-event-plugin";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";

import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

//Styles
import styles from "./App.css";
import classnames from "classnames/bind";
import Sidebar from "./components/Sidebar/Sidebar";
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
    console.log(this.props);
    this.state = {
      isMounted: false,
      logged:    true
    };
    this.handleToggle = this.handleToggle.bind(this);
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
    // this.setState({open: !this.state.open});
    this.props.dispatch(toggleSidebar());
  }

  logging = () => console.log(this.state);

  render() {
    let appBarStyle = cx({
      appBar:   true,
      expanded: this.props.sidebar
    });
    let appContentStyle = cx({
      appContent: true,
      expanded:   this.props.sidebar
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

          <Sidebar />

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
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
    sidebar: getsidebarOpen(store),
  };
}

export default connect(mapStateToProps)(App);
