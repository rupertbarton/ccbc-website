import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  progress: {
    margin: theme.spacing(2),
    color: theme.background,
  },
}));

const CircularIndeterminate = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

export default CircularIndeterminate