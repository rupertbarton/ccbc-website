import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    background: theme.background
  },
}));

const SaveButton = props => {
  const classes = useStyles();
  return (
    <Button variant="contained"
      color="primary"
      className={classes.button}
      onClick={props.onClick}>
      {props.label}
    </Button>
  );
};

export default SaveButton;