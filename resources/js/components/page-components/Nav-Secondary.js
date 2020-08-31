import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Breadcrumbs from './Breadcrumbs';
import Nav from './Nav';

import NavLinkMui from '../NavLinkMui';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import ExploreIcon from '@material-ui/icons/Explore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';

import { Collapse } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      marginLeft: drawerWidth,
    },
  }, 
  logo: {
    margin: "auto",
    textAlign: "center",
    maxWidth: "50%",
    maxHeight: "70%"
  },
  title : {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  },
  rightToolBar: { 
    marginLeft: "auto",
    marginRight: -12,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  rightToolBarDesktop: { 
    marginLeft: "auto",
    marginRight: -12,
  },
  hide: {
    marginLeft: "auto",
    marginRight: -12,
    display: 'none',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      background: 'black',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
    menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  logo: {
    maxWidth: 220,
  },
}));

export default function PersistentDrawerRight(props) {
  const classes = useStyles();
  const {container} = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDev, setOpenDev] = React.useState(false);
  const [openVid, setOpenVid] = React.useState(false);

  const handleDesktopDrawer = () => {
    setOpen(!open);
  };

  const handleMobileDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDevClick = () => { 
    setOpenDev(!openDev);
  }

  const handleVidClick = () => { 
    setOpenVid(!openVid);
  }

  const drawer = (
    <div>
    <div className={classes.toolbar} />    
      
      <List style={{ color: 'white'}}>

        <ListItem button component={NavLinkMui} to='/'>
          <ListItemText primary="HOME"/>
        </ListItem>

        <ListItem button onClick={handleDevClick}>
          <ListItemText primary="DEVELOPMENT"/>
          {openDev ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openDev} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

              <ListItem button component={NavLinkMui} to='/ideas'>
                <ListItemIcon style={{ color: 'white'}}>
                  <WbIncandescentIcon />
                </ListItemIcon>
                <ListItemText primary="Ideas" />
              </ListItem>

              <ListItem button component={NavLinkMui} to='/'>
                <ListItemIcon style={{ color: 'white'}}>
                  <ExploreIcon />
                </ListItemIcon>
                <ListItemText primary="Maps" />
              </ListItem>

              <ListItem button component={NavLinkMui} to='/strategy'>
                <ListItemIcon style={{ color: 'white'}}>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Strategy" />
              </ListItem>

          </List>
        </Collapse>

        <ListItem button onClick={handleVidClick}>
          <ListItemText primary="VIDEOS"/>
          {openVid ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openVid} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

              <ListItem button component={NavLinkMui} to='/ideas'>
                <ListItemIcon style={{ color: 'white'}}>
                  <MovieFilterIcon />
                </ListItemIcon>
                <ListItemText primary="Premiere of strategy" />
              </ListItem>

              <ListItem button component={NavLinkMui} to='/'>
                <ListItemIcon style={{ color: 'white'}}>
                  <ArtTrackIcon />
                </ListItemIcon>
                <ListItemText primary="The voyage" />
              </ListItem>

          </List>
        </Collapse>

        <ListItem button component={NavLinkMui} to='/ideas'>
          <ListItemText primary="INVESTMENT OPPORTUNITIES"/>
        </ListItem>

        <ListItem button component={NavLinkMui} to='/ideas'>
          <ListItemText primary="NEWS-PRESS"/>
        </ListItem>

        <ListItem button component={NavLinkMui} to='/contact'>
          <ListItemText primary="CONTACT"/>
        </ListItem>

      </List>
      
      <Divider />
  </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h5" noWrap className={classes.title}>
            <img src={require('../../../static/logos/devils_logo_sm.png')} alt="logo" className={classes.logo} />
          </Typography>
          <Hidden only='xs'implementation="css" className={classes.rightToolBarDesktop}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDesktopDrawer}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          </Hidden>

          
          <IconButton
            color="inherit"
            aria-label="open mobile drawer"
            edge="end"
            onClick={handleMobileDrawer}
            className={classes.rightToolBar}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
      <main
        className={classes.content}
      >
        <div className={classes.drawerHeader} />

      </main>
      <Hidden only='xs' implementation="css">
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDesktopDrawer}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {drawer}
      </Drawer>
      </Hidden>

      <Hidden only={['md','lg', 'xl']} implementation="css">
        <Drawer
        className="MuiDrawer-paperAnchorLeft MuiPaper-root"
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        open={mobileOpen}
        onClose={handleMobileDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
        keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleMobileDrawer}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {drawer}
      </Drawer>
      </Hidden>
    </div>
  );
}

