/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';
import Stats from './modules/Stats/Stats';
import Home from './components/Home/Home';
import Workout from './modules/Workout/Workout';
import Settings from './components/Settings/Settings';
import LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/SignUp/SignUpPage';
import Auth from './components/Auth/Auth';

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
  require('./modules/Workout/pages/WorkoutDetailPage/WorkoutDetailPage');
  require('./modules/Workout/pages/WorkoutListPage/WorkoutListPage');
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
            callback(null, require('./components/Dashboard/DashboardPage').default);
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
      path="/workouts"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Workout/pages/WorkoutListPage/WorkoutListPage').default);
        });
      }}
    />
    <Route
      path="/workouts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Workout/pages/WorkoutDetailPage/WorkoutDetailPage').default);
        });
      }}
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
