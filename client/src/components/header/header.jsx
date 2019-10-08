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
import YoutubeIcon from '@material-ui/icons/YouTube';
import { Drawer } from '@material-ui/core';

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


const Header = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.log(mobileOpen)
    setMobileOpen(!mobileOpen);
  };

  const HOCIconButton = (props) => {
    const handleSocialMediaClick = () => {
      props.href && (window.location.href = props.href)
    }

    return (
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={props.href ? handleSocialMediaClick : props.onClick}>
        <props.Component />
      </IconButton>
    )
  }


  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <HOCIconButton Component={MenuIcon} onClick={handleDrawerToggle} />
          <Typography variant="h6" className={classes.title}>
            Collingwood College Boat Club
          </Typography>
          <HOCIconButton Component={FacebookIcon} href="https://www.facebook.com/CollingwoodCollegeBoatClub/" />
          <HOCIconButton Component={TwitterIcon} href="https://twitter.com/ccbc_rowing" />
          <HOCIconButton Component={InstagramIcon} href="https://www.instagram.com/ccbc_durham/" />
          <HOCIconButton Component={YoutubeIcon} href="https://www.youtube.com/channel/UCRFds8sdfgcGvmCdm6F70sg" />
        </Toolbar>
      </AppBar>
      <Drawer mobileOpen={mobileOpen} closeDrawer={handleDrawerToggle} />
    </div>
  );
}

export default Header