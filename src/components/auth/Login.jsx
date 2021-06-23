import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { setAlert } from '../../actions/alert';

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

function Login({ setAlert }) {
  const classes = useStyles();
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert('Hello', 'error');
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs>
            <form onSubmit={handleSubmit}>
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
                  id="outlined-size-small"
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={(text) => setValidEmail(text.target.value)}
                />
              </Grid>
              <Grid item xs="auto">
                <TextField
                  id="outlined-size-small"
                  placeholder="Enter your password"
                  variant="outlined"
                  size="small"
                  onChange={(text) => setValidPassword(text.target.value)}
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
                  disabled={!(validPassword && validEmail)}
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
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Login);
