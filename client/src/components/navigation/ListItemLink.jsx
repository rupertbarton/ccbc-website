import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import isAuthenticated from '../../util/isAuthenticated';

const useStyles = makeStyles(() => ({
  subRoute: {
    paddingLeft: 24,
  }
}));

const ListItemLink = props => {

  const classes = useStyles();

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={props.route.path} {...itemProps} innerRef={ref} />
      )),
    [props.route.path],
  );

  if (isAuthenticated(props.currentUser, props.route)) {
    return (
      <>
        <li className={props.className} onClick={props.closeDrawer ? props.closeDrawer : null}>
          <ListItem button component={renderLink}>
            {props.route.icon ? <ListItemIcon>{props.route.icon}</ListItemIcon> : null}
            <ListItemText primary={props.route.name} />
          </ListItem>
        </li>
        {
          props.route.subRoutes && props.route.subRoutes.map(subRoute => {
            return (
              <ListItemLink key={subRoute.name} className={classes.subRoute}  closeDrawer={props.closeDrawer} currentUser={props.currentUser} route={{ ...subRoute, icon: <NavigateNextIcon/> }}  />
            );
          })
        }
      </>
    );
  }
  else {
    return <></>;
  }
};

ListItemLink.propTypes = {
  route: PropTypes.object,
};

export default ListItemLink;