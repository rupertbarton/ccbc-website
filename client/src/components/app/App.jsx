import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../navigation/headerContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import allRoutes from "../navigation/routes"
import AuthenticateRoute from '../navigation/AuthenticateRoute';

const mapOverRoutes = (routes) => (
  <>
    {routes.map((route) => (
      <div key={route.name}>
        <Route exact  path={route.path} render={() => <AuthenticateRoute {...route} />} />
        {route.subRoutes && mapOverRoutes(route.subRoutes)}
      </div>
    ))}
  </>
)

const App = () => {
  return (
    <>
      <Router>
        <CssBaseline />
        <Header />
        <Switch>
          {mapOverRoutes(allRoutes)}
        </Switch>
      </Router>
    </>
  );
}

export default App;
