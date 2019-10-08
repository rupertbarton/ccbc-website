import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from "./routes"
import AuthenticatedRoute from './AuthenticatedRoute';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route exact path={route.path} render={ () => <AuthenticatedRoute component={route.component} />} />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
