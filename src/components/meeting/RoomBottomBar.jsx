import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import SpeakerNotesOffIcon from '@material-ui/icons/SpeakerNotesOff';

const RoomBottomBar = ({ leaveRoom, chatView }) => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <IconButton onClick={(e) => chatView(e)}>
          <SpeakerNotesIcon />
        </IconButton>
      </Grid>
      <Grid item xs={3}>
        <button onClick={(e) => leaveRoom(e)}>Leave Room</button>
      </Grid>
    </Grid>
  );
};

export default RoomBottomBar;
