import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import ProfilePicture from './ProfilePicture';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

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
    signUpLogo: {
      fontSize: '1.75em',
      fontWeight: '750',
    },
    grid: {
      marginTop: '.75em',
    },
    text: {
      marginTop: '1em',
    },
    bottomRow: {
      position: 'absolute',
      bottom: '15px',
    },
    signUp: {
      textDecoration: 'none',
      marginTop: '1em',
    },
  })
);
const Signup = ({ setAlert, register, isAuthenticated }) => {
  const classes = useStyles();
  const [newWindow, setNewWindow] = useState('true');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    avatar: '',
    defaultAvatar: true,
  });

  const { name, email, password, password2, avatar } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert(
        'Passwords do not match. Please re-enter your password.',
        'error'
      );
    } else {
      register({ name, email, password, avatar });
    }
  };

  // if (isAuthenticated && newWindow) {
  //   setNewWindow(false);
  //   var window = remote.getCurrentWindow();
  //   window.close();
  //   createNewWindow();
  // }

  return (
    <>
      <div style={{ padding: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h1"
              className={classes.signUpLogo}
            >
              Sign Up
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            style={{ marginRight: '30px' }}
            className={classes.grid}
          >
            <ProfilePicture onChange={onChange} />
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Grid container direction="column">
                <Grid item>
                  <TextField
                    name="name"
                    placeholder="Enter your name"
                    variant="outlined"
                    size="small"
                    label="Name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => onChange(e)}
                    value={name}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name="email"
                    placeholder="Enter your email"
                    variant="outlined"
                    size="small"
                    onChange={(e) => onChange(e)}
                    fullWidth
                    label="Email"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={email}
                    className={classes.text}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name="password"
                    placeholder="Enter your password"
                    variant="outlined"
                    type="password"
                    size="small"
                    onChange={(e) => onChange(e)}
                    value={password}
                    label="Password"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    className={classes.text}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name="password2"
                    placeholder="Confirm your password"
                    variant="outlined"
                    type="password"
                    size="small"
                    onChange={(e) => onChange(e)}
                    value={password2}
                    label="Confirm Password"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    className={classes.text}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                    label="Submit"
                    type="submit"
                    fullWidth
                    disabled={!(name && email && password)}
                    className={classes.signUp}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs className={classes.bottomRow}>
            <Button component={Link} to="/login">
              &lt; Back
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Signup);
