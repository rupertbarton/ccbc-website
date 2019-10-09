import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../navigation/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from "../navigation/routes"
import AuthenticatedRoute from '../navigation/AuthenticatedRoute';

const App = () => {
  return (
    <>
      <Router>
      <CssBaseline />
      <Header />
        <Switch>
          {routes.map((route) => (
            <Route exact key={route.name} path={route.path} render={ () => <AuthenticatedRoute component={route.component} />} />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
