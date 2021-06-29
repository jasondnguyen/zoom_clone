import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { setAlert } from '../../actions/alert';
import { joinRoom } from '../../actions/meeting';

const useStyles = makeStyles(() =>
  createStyles({
    join: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    id: {
      marginTop: '1em',
    },
    name: {
      marginTop: '1em',
    },
    checkBoxes: {
      marginTop: '1em',
    },
    joinButton: {
      marginLeft: '12.5em',
    },
    cancelButton: {
      marginLeft: '1em',
    },
  })
);

const JoinMeeting = ({ joinRoom, setAlert }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({ identity: '', room: null });

  const { identity, room } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (identity, room) => {
    joinRoom(identity, room);
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <Grid container direction="column" justify="center" alignItems="left">
          <Grid item xs>
            <Typography variant="h5" component="h1" className={classes.join}>
              Join Meeting
            </Typography>
          </Grid>
          <Grid item xs>
            <form handleSubmit={handleSubmit}>
              <TextField
                name="room"
                variant="outlined"
                placeholder="Enter meeting ID"
                size="small"
                className={classes.id}
                onChange={onChange}
                fullWidth
              />
              <TextField
                name="identity"
                variant="outlined"
                placeholder="Enter your name"
                size="small"
                className={classes.name}
                onChange={onChange}
                fullWidth
              />
              <FormControlLabel
                className={classes.checkBoxes}
                control={<Checkbox name="checkedA" color="primary" />}
                label={
                  <Typography variant="body2">
                    Do not connect to audio
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox name="checkedA" color="primary" />}
                label={
                  <Typography variant="body2">Turn off my video</Typography>
                }
              />
              <Button
                variant="contained"
                type="submit"
                disabled={!(room && identity)}
                className={classes.joinButton}
              >
                Join
              </Button>
              <Button variant="contained" className={classes.cancelButton}>
                Cancel
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default connect(null, { joinRoom })(JoinMeeting);
