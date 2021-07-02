import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { setAlert } from '../../actions/alert';
import { joinRoom } from '../../actions/meeting';
import BackButton from '../layout/BackButton';
import DividerWithText from '../layout/DividerWithText';

const useStyles = makeStyles(() =>
  createStyles({
    join: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    textFields: {
      marginTop: '1em',
    },
    joinButton: {
      marginTop: '1em',
    },
  })
);

const JoinMeeting = ({ joinRoom, setAlert, isAuthenticated }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({ identity: '', room: '' });

  const { identity, room } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    joinRoom({ identity, room });
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Typography variant="h5" component="h1" className={classes.join}>
          Join Meeting
        </Typography>
      </Grid>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid item>
          <TextField
            name="room"
            variant="outlined"
            placeholder="Enter meeting ID"
            size="small"
            value={room}
            className={classes.textFields}
            onChange={(e) => onChange(e)}
            fullWidth
          />
          <TextField
            name="identity"
            value={identity}
            variant="outlined"
            placeholder="Enter your name"
            size="small"
            className={classes.textFields}
            onChange={(e) => onChange(e)}
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={!(room && identity)}
            className={classes.joinButton}
          >
            Join
          </Button>
        </Grid>
        <Grid item style={{ marginTop: '1em' }}>
          <DividerWithText children="or" />
          <BackButton link={isAuthenticated ? '/dashboard' : '/'} />
        </Grid>
      </form>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { joinRoom, setAlert })(JoinMeeting);
