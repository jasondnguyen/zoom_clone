import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

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
    signInLogo: {
      fontSize: '1.75em',
      fontWeight: '750',
    },
    grid: {
      marginTop: '2em',
    },
    password: {
      marginTop: '1em',
    },
  })
);

export default function Login() {
  const classes = useStyles();
  const [signInDisabled, setSignInDisabled] = useState(true);

  return (
    <>
      <div style={{ padding: 20 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h1"
              className={classes.signInLogo}
            >
              Sign In
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            <Grid container direction="column">
              <Grid item xs>
                <TextField
                  id="outlined-size-small"
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="outlined-size-small"
                  placeholder="Enter your password"
                  variant="outlined"
                  size="small"
                  fullWidth
                  className={classes.password}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={4} className={classes.grid}>
            <Grid container direction="column">
              <Typography>Hi</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
