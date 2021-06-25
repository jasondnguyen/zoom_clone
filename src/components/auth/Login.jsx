import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { login } from '../../actions/auth';

const remote = require('electron').remote;

const createNewWindow = () => {
  const electron = window.require('electron');
  const { BrowserWindow } = electron.remote;
  const win = new BrowserWindow({
    width: 1120,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
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
    email: {
      marginTop: '2em',
      width: '350px',
    },
    password: {
      marginTop: '1em',
      width: '350px',
    },
    signInRow: {
      marginTop: '1em',
    },
    signInButton: {
      marginLeft: '6em',
    },
    bottomRow: {
      position: 'absolute',
      bottom: '15px',
    },
    signUp: {
      textDecoration: 'none',
      marginLeft: '24em',
    },
  })
);

function Login({ login, isAuthenticated }) {
  const classes = useStyles();
  const [newWindow, setNewWindow] = useState('true');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  // if (isAuthenticated && newWindow) {
  //   setNewWindow(false);
  //   var window = remote.getCurrentWindow();
  //   window.close();
  //   createNewWindow();
  // }

  return (
    <>
      <div style={{ padding: 20 }}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Grid item xs={12} align="center">
                <Typography
                  variant="h5"
                  component="h1"
                  className={classes.signInLogo}
                >
                  Sign In
                </Typography>
              </Grid>
              <Grid item xs="auto" className={classes.email}>
                <TextField
                  name="email"
                  id="outlined-size-small"
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs="auto">
                <TextField
                  name="password"
                  id="outlined-size-small"
                  placeholder="Enter your password"
                  variant="outlined"
                  type="password"
                  size="small"
                  onChange={(e) => onChange(e)}
                  fullWidth
                  className={classes.password}
                />
              </Grid>
              <Grid item xs="auto" className={classes.signInRow}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Keep me signed in"
                />
                <Button
                  variant="contained"
                  disabled={!(email && password)}
                  className={classes.signInButton}
                  type="submit"
                >
                  Sign in
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <Grid item xs className={classes.bottomRow}>
          <Button component={Link} to="/">
            &lt; Back
          </Button>
          <Link to="/signup" className={classes.signUp}>
            Sign Up Free
          </Link>
        </Grid>
      </div>
    </>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
