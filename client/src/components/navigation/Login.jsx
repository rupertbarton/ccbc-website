import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  roundedImage: {
    height: 32,
    width: 32,
    borderRadius: '100%'
  }
}));

const Login = props => {
  const classes = useStyles();

  return props.currentUser ? (
    <li >
      <ListItem button
        onClick={props.logout}>
        <ListItemIcon>{props.currentUser.photoURL ? <img className={classes.roundedImage}
          src={props.currentUser.photoURL}/> : <PersonIcon />}</ListItemIcon>
        <ListItemText primary={'Sign out'} />
      </ListItem>
    </li>
  ) :
    (
      <li>
        <ListItem button
          onClick={props.login}>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary={'Sign in'} />
        </ListItem>
      </li>
    );
};

Login.propTypes = {
  currentUser: PropTypes.objectOf({
    photoURL: PropTypes.string
  }),
  logout: PropTypes.func,
  login: PropTypes.func
};

export default Login;