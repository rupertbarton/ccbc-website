import React from 'react';
import Content from '../content/Content';
import isAuthenticated from '../../util/isAuthenticated';
import { Redirect  } from 'react-router-dom';

const AuthenticateRoute = props => {
  if (isAuthenticated(props.currentUser, props.route)) {
    return (
      <Content {...props} />
    );
  }
  else {
    return (
      <Redirect to="/" />
    );
  }
};

export default AuthenticateRoute;