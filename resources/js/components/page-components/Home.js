import React from 'react';
import '../../../css/App.css';
import ReactDOM from 'react-dom';
import Nav from './Nav';

import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import PhotoCameraSharpIcon from '@material-ui/icons/PhotoCameraSharp';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
  }));



function Home() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <div className="bg home-info">
          <div>
       
            <Typography
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <InfoSharpIcon 
                style={{ color: 'white'}}
                fontSize="large"/>
            </Typography>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography style={{ color: 'white'}}>Created by Idaho's Talent<br/> 
                Web Developer: Nick Giegerich | ngiegerich@gmail.com<br/> 
                Content Developer: Forever Wild Media | seanmuldoon@foreverwild.media<br/>
                <div className="home-camera-icon">
                  <div><PhotoCameraSharpIcon style={{ color: 'white'}}/></div>
                    <div style={{paddingRight: 6}}>:</div>
                    <div>Snake River Canyon</div>
                </div>
                </Typography>
            </Popover>
          </div>
            <Nav />
       </div>
    );
}

export default Home;