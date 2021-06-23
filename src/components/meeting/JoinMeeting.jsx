import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

const electron = require('electron');

const handleCancel = () => {
  const { remote } = electron.remote;
  const window = remote.getCurrentWindow();
  window.close();
};

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

const JoinMeeting = () => {
  const classes = useStyles();
  const [meetingID, setMeetingID] = useState('');
  const [name, setName] = useState('');

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
            <form noValidate autoComplete="off">
              <TextField
                id="meetingID"
                variant="outlined"
                placeholder="Enter meeting ID"
                size="small"
                className={classes.id}
                onChange={(e) => {
                  setMeetingID(e.target.value);
                }}
                fullWidth
              />
              <TextField
                id="name"
                variant="outlined"
                placeholder="Enter your name"
                size="small"
                className={classes.name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
                disabled={!(meetingID && name)}
                className={classes.joinButton}
              >
                Join
              </Button>
              <Button
                variant="contained"
                onClick={handleCancel}
                className={classes.cancelButton}
              >
                Cancel
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default JoinMeeting;
