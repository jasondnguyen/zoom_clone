import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const createNewWindow = () => {
  const electron = window.require('electron');
  const { BrowserWindow } = electron.remote;
  const win = new BrowserWindow({
    width: 408,
    height: 368,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: false,
    autoHideMenuBar: true,
  });
  win.loadURL(`file://${__dirname}/index.html#/joinmeeting`);
};

const useStyles = makeStyles(() =>
  createStyles({
    zoom: {
      color: '#2D8CFF',
      fontSize: '4em',
      marginTop: '20px',
      fontWeight: 'bold',
    },
    button: {
      display: 'flex',
      backgroundColor: '#0E71EB',
      color: 'white',
      marginTop: '80px',
      borderRadius: '8px',
      paddingLeft: '55px',
      paddingRight: '55px',
      fontSize: '13px',
      fontWeight: 'bold',
    },
    signIn: {
      marginTop: '15px',
      border: '2px solid #EDEDF4',
      borderRadius: '8px',
      paddingLeft: '79px',
      paddingRight: '79px',
      fontSize: '13px',
    },
    version: {
      display: 'flex',
      position: 'absolute',
      bottom: '15px',
    },
  })
);

export default function Startup() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h4" component="h1" className={classes.zoom}>
          zoom
        </Typography>
        <Button
          onClick={createNewWindow}
          variant="contained"
          className={classes.button}
        >
          Join a Meeting
        </Button>
        <Button component={Link} to="/login" className={classes.signIn}>
          Sign in
        </Button>
        <Typography
          variant="caption"
          component="h2"
          className={classes.version}
        >
          Version 1.0.0
        </Typography>
      </Grid>
    </>
  );
}
