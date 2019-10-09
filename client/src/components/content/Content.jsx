import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginTop: 64 + theme.spacing(1.5),
      marginLeft: 240 + theme.spacing(1.5)
    },
    marginTop: 56 + theme.spacing(1.5),
    margin: theme.spacing(0, 1.5),
    padding: theme.spacing(2)
  },
  toolbar: theme.mixins.toolbar,
}));

const Content = (props) => {
  const classes = useStyles();

  return (
    <div>
    <Paper className={classes.root}>
          <props.component/>
    </Paper>
    </div>
  )
}

export default Content