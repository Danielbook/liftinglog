/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';
import Stats from './modules/Stats/Stats';
import Home from './modules/Home/Home';
import Workout from './modules/Workout/Workout';
import Settings from './modules/Settings/Settings';
import LoginPage from './modules/Login/LoginPage';
import SignUpPage from './modules/SignUp/SignUpPage';
import Auth from './modules/Auth/Auth';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}

function requireAuth(nextState, replace) {
  if (!Auth.isUserAuthenticated()) {
    replace({
      pathname: '/'
    })
  }
}


// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, callback) => {
          if (Auth.isUserAuthenticated()) {
            callback(null, require('./modules/Dashboard/DashboardPage').default);
          } else {
            callback(null, Home);
        }
      }}

    />
    <Route
      path="/stats"
      component={Stats}
      onEnter={requireAuth}
    />
    <Route
      path="/settings"
      component={Settings}
      onEnter={requireAuth}
    />
    <Route
      path="/workout"
      component={Workout}
      onEnter={requireAuth}
    />
    <Route
      path="/login"
      component={LoginPage}
    />
    <Route
      path="/signup"
      component={SignUpPage}
    />
    <Route
      path='/logout'
      onEnter={(nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }}
    />


  </Route>
);
