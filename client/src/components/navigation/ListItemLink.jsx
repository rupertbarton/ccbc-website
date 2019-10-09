import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
  subRoute: {
    paddingLeft: 24,
  }
}));

const ListItemLink = (props) => {

  const classes = useStyles()

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={props.path} {...itemProps} innerRef={ref} />
      )),
    [props.path],
  );

  return (
    <>
      <li className={props.className} onClick={props.closeDrawer ? props.closeDrawer : null}>
        <ListItem button component={renderLink}>
          {props.icon ? <ListItemIcon>{props.icon}</ListItemIcon> : null}
          <ListItemText primary={props.name} />
        </ListItem>
      </li>
      {
        props.subRoutes && props.subRoutes.map((subRoute) => {
          return (
            <ListItemLink key={subRoute.name} className={classes.subRoute} icon={<NavigateNextIcon/>} closeDrawer={props.closeDrawer} {...subRoute}  />
          )
        })
      }
    </>
  );
}

export default ListItemLink