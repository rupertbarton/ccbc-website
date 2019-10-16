import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/appContainer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import firebaseApp from './api/firebaseApp';

const store = configureStore();

const theme = createMuiTheme({
  background: 'linear-gradient(90deg, #D00000 30%, #B00000 70%)',
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
