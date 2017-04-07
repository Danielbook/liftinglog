import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
// Import Components
import Helmet from "react-helmet";
import DevTools from "./components/DevTools";
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

import Navbar from './Navbar';
import Sidebar from "./Sidebar";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {toggleAddPost} from "./AppActions";
import RaisedButton from "material-ui/RaisedButton";

import injectTapEventPlugin from "react-tap-event-plugin";
// import {Button, Header, Icon, Menu, Segment, Sidebar} from "semantic-ui-react";
// import { switchLanguage } from '../../modules/Intl/IntlActions';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export class App extends Component {
  toggleVisibility = () => this.setState({visible: !this.state.visible});

  constructor(props) {
    super(props);
    //this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = {
      isMounted:  false,
      visible:    true,
      sideBarOpen: false
    };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }


  handleToggle = () => this.setState({sideBarOpen: !this.state.sideBarOpen});

  logging = () => console.log(this.state);

  render() {
    const {visible} = this.state;
    return (
      <MuiThemeProvider>
        <div>
          {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
          <div>
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
            <Navbar />

            <Sidebar open={this.state.sideBarOpen}/>

            <RaisedButton
              label="Toggle Drawer"
              onTouchTap={this.handleToggle}
            />

            <RaisedButton
              label="Log state"
              onTouchTap={this.logging}
            />

            {/*<Header*/}
            {/*switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}*/}
            {/*intl={this.props.intl}*/}
            {/*toggleAddPost={this.toggleAddPostSection}*/}
            {/*/>*/}
            {/*<div className={styles.container}>*/}
            {/*{this.props.children}*/}
            {/*</div>*/}
            {/*<Footer />*/}
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
