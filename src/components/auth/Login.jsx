import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

const createNewWindow = () => {
  const electron = window.require('electron');
  const { BrowserWindow } = electron.remote;
  const win = new BrowserWindow({
    width: 1120,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: true,
  });
  win.loadURL(`file://${__dirname}/index.html#/home`);
  win.setMenuBarVisibility(false);
};

const useStyles = makeStyles(() =>
  createStyles({
    sign: {
      fontSize: '28px',
      fontWeight: 'bold',
      paddingTop: '20px',
    },
    back: {
      display: 'flex',
      position: 'absolute',
      bottom: '15px',
    },
    email: {
      borderRadius: '50',
      paddingTop: '30px',
      fontSize: '10px',
    },
    password: {
      paddingTop: '15px',
      fontSize: '10px',
    },
    signIn: {
      marginTop: '10px',
      marginLeft: '30px',
      position: 'absolute',
    },
  })
);

export default function Login() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div style={{ padding: 20 }}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={6}>
            <Typography
              variant="h5"
              component="h1"
              className={classes.sign}
              container
            >
              Sign In
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="email"
                variant="outlined"
                placeholder="Enter your email"
                size="small"
                className={classes.email}
                fullWidth
              />
              <TextField
                id="password"
                variant="outlined"
                placeholder="Enter your password"
                size="small"
                className={classes.password}
                fullWidth
              />
            </form>
            <FormControlLabel
              control={<Checkbox name="checkedA" color="primary" />}
              label={<Typography variant="body2">Keep me signed in</Typography>}
            />
            <Button
              variant="contained"
              className={classes.signIn}
              onClick={createNewWindow}
            >
              Sign in
            </Button>
            <Grid item xs style={{ marginLeft: '-140px' }}>
              <Button component={Link} to="/" className={classes.back}>
                &lt; Back
              </Button>
            </Grid>
            <Grid item xs style={{ marginLeft: '300px' }}>
              <Button
                component={Link}
                color="primary"
                to="/signup"
                className={classes.back}
              >
                Sign up free
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
