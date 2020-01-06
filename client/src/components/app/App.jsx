import React, { useState } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../navigation/headerContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import allRoutes from '../navigation/routes';
import AuthenticateRoute from '../navigation/authenticateRouteContainer';
import { auth } from 'firebase/app';
import PropTypes from 'prop-types';
import LoadingSpinner from '../common/LoadingSpinner';

const mapOverRoutes = routes => (
  <>
    {routes.map(route => (
      <div key={route.name}>
        <Route exact
          path={route.path}
          render={() => <AuthenticateRoute route={route} />} />
        {route.subRoutes && mapOverRoutes(route.subRoutes)}
      </div>
    ))}
  </>
);

const App = props => {

  const [authReady, setAuthReady] = useState(false);

  auth().onAuthStateChanged(user => {
    if (user) {
      user.getIdTokenResult().then(token => {
        let customClaims = {
          isAdmin: token.claims.isAdmin,
          isCaptain: token.claims.isCaptain,
          isExec: token.claims.isExec,
          isMember: token.claims.isMember,
          roleName: token.claims.roleName,
        };
        props.updateCurrentUser({ ...user, ...customClaims });
        setAuthReady(true);
      });
    } else {
      props.updateCurrentUser(null);
      setAuthReady(true);
    }
  });

  return (
    <>
      {
        authReady ?

          <Router>
            <CssBaseline />
            <Header />
            <Switch>
              {mapOverRoutes(allRoutes)}
            </Switch>
          </Router>
          :
          <Router>
            <Header />
            <LoadingSpinner />
          </Router>
      }
    </>
  );
};

App.propTypes = {
  updateCurrentUser: PropTypes.func
};

export default App;
