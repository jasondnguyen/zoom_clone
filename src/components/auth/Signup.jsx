import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const useStyles = makeStyles(() =>
  createStyles({
    signUpLogo: {
      fontSize: '1.75em',
      fontWeight: '750',
    },
    grid: {
      marginTop: '2em',
    },
    password: {
      marginTop: '1em',
    },
    signInRow: {
      marginTop: '1em',
    },
    signInButton: {
      marginLeft: '.74em',
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

export default function Signup() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ name, email, password });

    axios
      .post('http://localhost:5000/api/auth', body, config)
      .then((res) => {
        console.log(res.data);
        return null; // placeholder
      })
      .catch((error) => {
        const { errors } = error.response.data;
        if (errors) {
          errors.forEach((err) => console.log(err));
        }
      });
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
          <Grid item xs={4} className={classes.grid}>
            hi
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            <form onSubmit={handleSubmit}>
              <Grid container direction="column">
                <Grid item>
                  <TextField
                    placeholder="Enter your name"
                    variant="outlined"
                    size="small"
                    onChange={(text) => setName(text.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="Enter your email"
                    variant="outlined"
                    size="small"
                    onChange={(text) => setEmail(text.target.value)}
                    fullWidth
                    className={classes.password}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="Enter your password"
                    variant="outlined"
                    size="small"
                    onChange={(text) => setPassword(text.target.value)}
                    fullWidth
                    className={classes.password}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    label="Submit"
                    type="submit"
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
