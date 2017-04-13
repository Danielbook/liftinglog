import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
// Import Components
import Helmet from "react-helmet";
import DevTools from "./components/DevTools";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {toggleAddPost, toggleSidebar} from "./AppActions";
import {getsidebarOpen} from "./AppReducer";
// Material UI Components
import RaisedButton from "material-ui/RaisedButton";
import "./components/tap_events";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
// Material UI Icons
import NavigationMoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
// Styles
import styles from "./App.css";
import classnames from "classnames/bind";
import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router";
import Auth from "../Auth/Auth";
let cx = classnames.bind(styles);

// import { switchLanguage } from '../../modules/Intl/IntlActions';

export class App extends Component {
  constructor(props) {
    super(props);
    //this.handleTouchTap = this.handleTouchTap.bind(this);
    this.state = {
      isMounted: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  handleToggle() {
    this.props.dispatch(toggleSidebar());
  }

  render() {
    let appBarStyle = cx({
      appBar:   true,
      expanded: this.props.sidebar
    });
    let appContentStyle = cx({
      appContent: true,
      expanded:   this.props.sidebar
    });
    const Logged = (props) => (
      <IconMenu
        {...props}
        iconButtonElement={
          <IconButton><NavigationMoreVertIcon/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Login" containerElement={<Link to="/login" />}/>
        <MenuItem primaryText="Sign up" containerElement={<Link to="/signup" />}/>
      </IconMenu>
    );

    Logged.muiName = 'IconMenu';
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({userAgent: (typeof navigator !== 'undefined' && navigator.userAgent) || 'all' })}>
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
            iconElementRight={Auth.isUserAuthenticated() ? <FlatButton label="Logout" containerElement={<Link to="/logout"/>} /> : <Logged />}
          />

          <Sidebar />

          <div className={appContentStyle}>
            { this.props.children }
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
    intl:    store.intl,
    sidebar: getsidebarOpen(store),
  };
}

export default connect(mapStateToProps)(App);
