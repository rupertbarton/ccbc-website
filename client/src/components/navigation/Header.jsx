import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Drawer from './Drawer'
import { facebookLogin, logout } from '../../api/auth'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'linear-gradient(90deg, #D00000 30%, #B00000 70%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  appBarIcon: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(0),
      padding: theme.spacing(1.5),
    },
  },
  title: {
    flexGrow: 1,
  },
}));


const Header = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const SocialMediaIcon = (props) => {
    const handleSocialMediaClick = () => {
      const win = window.open( props.href, "_blank")
      win.focus();
    }

    return (
      <IconButton edge="start" className={classes.appBarIcon} color="inherit" aria-label="menu" onClick={handleSocialMediaClick}>
        <props.Component />
      </IconButton>
    )
  }


  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {isMobile ? <>CCBC</> : <>Collingwood College Boat Club</>}
          </Typography>
          <SocialMediaIcon Component={FacebookIcon} aria-label="facebook" href="https://www.facebook.com/CollingwoodCollegeBoatClub/" />
          <SocialMediaIcon Component={TwitterIcon} aria-label="twitter" href="https://twitter.com/ccbc_rowing" />
          <SocialMediaIcon Component={InstagramIcon} aria-label="instagram" href="https://www.instagram.com/ccbc_durham/" />
          <SocialMediaIcon Component={YoutubeIcon} aria-label="youtube" href="https://www.youtube.com/channel/UCRFds8sdfgcGvmCdm6F70sg" />
        </Toolbar>
      </AppBar>
      <Drawer mobileOpen={mobileOpen} closeDrawer={handleDrawerToggle} login={facebookLogin} currentUser={props.currentUser} logout={logout} />
    </div>
  );
}

export default Header