import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'red',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar() {
  const classes = useStyles();

  const HOCIconButton = (props) => {
    return (
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <props.Component />
      </IconButton>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
            <HOCIconButton Component={MenuIcon} />
          <Typography variant="h6" className={classes.title}>
            Collingwood College Boat Club
          </Typography>
          <HOCIconButton href="www.google.com" Component={FacebookIcon} />
          <HOCIconButton Component={TwitterIcon} />
          <HOCIconButton Component={InstagramIcon} />
        </Toolbar>
      </AppBar>
    </div>
  );
}