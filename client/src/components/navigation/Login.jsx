import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';

const Login = (props) => {
  return props.currentUser ? (
    <li>
      <ListItem button onClick={props.logout}>
        <ListItemIcon>{props.currentUser.photoURL ? <img src={props.currentUser.photoURL}/> : <PersonIcon />}</ListItemIcon>
        <ListItemText primary={"Sign out"} />
      </ListItem>
    </li>
  ) :
    (
      <li>
        <ListItem button onClick={props.login}>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary={"Sign in"} />
        </ListItem>
      </li>
    )
}

export default Login