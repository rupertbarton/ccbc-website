import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import routes from './routes';
import ListItemLink from './ListItemLink';
import Login from './Login';
import PropTypes from 'prop-types';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

const DrawerComponent = props => {
  const classes = useStyles();

  const drawerContent = isMobile => (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {routes.map(route => (
          <div key={route.name}>
            <ListItemLink  route={route}
              currentUser={props.currentUser}
              closeDrawer={isMobile && props.closeDrawer} />
            <Divider />
          </div>
        ))}
        <Login login={props.login}
          currentUser={props.currentUser}
          logout={props.logout} />
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer}
      aria-label="Navigation drawer">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp
        implementation="css">
        <Drawer
          variant="temporary"
          open={props.mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          onClose={props.closeDrawer}
        >
          {drawerContent(true)}
        </Drawer>
      </Hidden>
      <Hidden xsDown
        implementation="css">
        <Drawer
          open
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          position="static"
        >
          {drawerContent(false)}
        </Drawer>
      </Hidden>
    </nav>
  );
};

DrawerComponent.propTypes = {
  currentUser: PropTypes.object,
  closeDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
  mobileOpen: PropTypes.bool
};

export default DrawerComponent;