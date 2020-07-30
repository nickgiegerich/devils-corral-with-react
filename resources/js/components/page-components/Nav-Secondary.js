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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
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
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDev, setOpenDev] = React.useState(false);
  const [openVid, setOpenVid] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
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

              <ListItem button component={NavLinkMui} to='/'>
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

        <ListItem button component={NavLinkMui} to='/ideas'>
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
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <img src={require('../../../static/logos/devils_logo_sm.png')} alt="logo" className={classes.logo} />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac. */}
        </Typography>
        <Typography paragraph>
          {/* Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. */}
        </Typography>
      </main>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {drawer}
      </Drawer>
    </div>
  );
}

