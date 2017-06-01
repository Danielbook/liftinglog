import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { removeUser } from '../../modules/App/AppActions';
import Auth from '../Auth/Auth';

class LogoutPage extends Component {

  componentWillMount() {
    this.props.dispatch(removeUser());
    Auth.deauthenticateUser();
    this.props.router.replace('/');
  }

  render() {
    return null;
  }
}
LogoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

export default connect()(withRouter(LogoutPage));
