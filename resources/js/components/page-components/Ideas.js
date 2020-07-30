import React from 'react';
import '../../../css/App.css';
import ReactDOM from 'react-dom';
import PersistentDrawerRight from './Nav-Secondary';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  }));

function Ideas() {

    const classes = useStyles();

    return (
      <div className={classes.root}>
        <div>
          <PersistentDrawerRight/>
        </div>
            
          
          <Grid container spacing={3} >
            
          </Grid>
    </div>

    );
}

export default Ideas;