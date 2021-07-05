import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    text: {
      marginTop: '1.3em',
    },
  })
);

const SignupForm = ({ onChange }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <TextField
          name="name"
          placeholder="Enter your name"
          variant="outlined"
          size="medium"
          label="Name"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => onChange(e)}
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          name="email"
          placeholder="Enter your email"
          variant="outlined"
          size="medium"
          onChange={(e) => onChange(e)}
          fullWidth
          label="Email"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.text}
        />
      </Grid>
      <Grid item>
        <TextField
          name="password"
          placeholder="Enter your password"
          variant="outlined"
          type="password"
          size="medium"
          onChange={(e) => onChange(e)}
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
          size="medium"
          onChange={(e) => onChange(e)}
          label="Confirm Password"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          className={classes.text}
        />
      </Grid>
    </Grid>
  );
};

SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SignupForm;
