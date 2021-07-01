import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { login } from '../../actions/auth';
import DividerWithText from '../layout/DividerWithText';

const useStyles = makeStyles(() =>
  createStyles({
    signInLogo: {
      fontSize: '2em',
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
    signIn: {
      borderRadius: '8px',
      marginTop: '1em',
      backgroundColor: '#0E71EB',
      color: 'white',
    },
    signUp: {
      borderRadius: '8px',
      marginTop: '1em',
      backgroundColor: '#F26D21',
      color: 'white',
    },
    back: {
      borderRadius: '8px',
      marginTop: '1em',
      border: '2px solid #EDEDF4',
    },
    divider: {
      width: '100%',
      marginTop: '1em',
    },
  })
);

function Login({ login, isAuthenticated }) {
  const classes = useStyles();
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

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs="auto" align="center">
          <Typography
            variant="h5"
            component="h1"
            className={classes.signInLogo}
          >
            Sign In
          </Typography>
        </Grid>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Grid item xs="auto">
            <TextField
              name="email"
              placeholder="Enter your email"
              variant="outlined"
              size="small"
              disableElevation
              fullWidth
              onChange={(e) => onChange(e)}
              className={classes.email}
            />
          </Grid>
          <Grid item xs="auto">
            <TextField
              name="password"
              placeholder="Enter your password"
              variant="outlined"
              type="password"
              size="small"
              fullWidth
              onChange={(e) => onChange(e)}
              className={classes.password}
            />
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              disabled={!(email && password)}
              type="submit"
              className={classes.signIn}
              fullWidth
              disableElevation
            >
              Sign in
            </Button>
          </Grid>
          <Grid item xs="auto" className={classes.divider}>
            <DividerWithText children="or" />
          </Grid>
          <Grid item xs="auto">
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              className={classes.signUp}
              fullWidth
              disableElevation
            >
              Sign up for free
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button fullWidth component={Link} to="/" className={classes.back}>
              Back
            </Button>
          </Grid>
        </form>
      </Grid>
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
