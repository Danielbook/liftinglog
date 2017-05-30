import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Helmet from "react-helmet";
import DevTools from "./components/DevTools";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {removeUser, toggleSidebar} from "./AppActions";
import {getSidebarOpen} from "./AppReducer";
import "./components/tap_events";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import styles from "./App.css";
import classnames from "classnames/bind";
import Sidebar from "../../components/Sidebar/Sidebar";
import {Link} from "react-router";
import Auth from "../../components/Auth/Auth";
import {Grid} from "react-flexbox-grid";
import Logged from "./components/Logged";
let cx = classnames.bind(styles);

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      userName: ''
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (Auth.isUserAuthenticated()) {
      this.props.dispatch(toggleSidebar());
    }
  }

  componentDidMount() {
    if (!Auth.isUserAuthenticated()) {
      this.props.dispatch(removeUser());
    }
  }

  render() {
    const appBarStyle = cx({
      appBar: true,
      expanded: this.props.sidebar
    });
    const appContentStyle = cx({
      appContent: true,
      expanded: this.props.sidebar
    });
    return (
      <MuiThemeProvider
        muiTheme={getMuiTheme({userAgent: (typeof navigator !== 'undefined' && navigator.userAgent) || 'all'})}>
        <div>
          {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
          <Helmet
            title="Lifting Log"
            meta={[
              {charset: 'utf-8'},
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <AppBar
            className={appBarStyle}
            onLeftIconButtonTouchTap={this.handleToggle}
            title="Lifting Log"
            iconElementRight={Auth.isUserAuthenticated() ?
              <FlatButton label="Logout" containerElement={<Link to="/logout"/>}/> : <Logged />}
          />

          {Auth.isUserAuthenticated() ? <Sidebar handleToggle={this.handleToggle}/> : null}

          <Grid
            fluid
            className={appContentStyle}>
            { this.props.children }
          </Grid>
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
    sidebar: getSidebarOpen(store),
  };
}

export default connect(mapStateToProps)(App);
