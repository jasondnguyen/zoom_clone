import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import ProfilePicture from './ProfilePicture';
import { setAlert } from '../../actions/alert';

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
const Signup = ({ setAlert }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });

  const { name, email, password, avatar } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert('Hello', 'error');

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };

    // const body = JSON.stringify({ name, email, password });

    // axios
    //   .post('http://localhost:5000/api/auth', body, config)
    //   .then((res) => {
    //     console.log(res.data);
    //     return null; // placeholder
    //   })
    //   .catch((error) => {
    //     const { errors } = error.response.data;
    //     if (errors) {
    //       errors.forEach((err) => console.log(err));
    //     }
    //   });
  };

  return (
    <>
      <div style={{ padding: 20 }}>
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
          <Grid item xs={6} className={classes.grid}>
            <form onSubmit={handleSubmit}>
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
          <Grid
            item
            xs={5}
            style={{ marginLeft: '20px' }}
            className={classes.grid}
          >
            <ProfilePicture />
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
};

export default connect(null, { setAlert })(Signup);
