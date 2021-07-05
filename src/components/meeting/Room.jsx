import React, { useState, useEffect, Fragment } from 'react';
import ParticipantGrid from './ParticipantGrid';
import Chatbox from './Chatbox';
import RoomBottomBar from './RoomBottomBar';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Grid } from '@material-ui/core';
import { returnToLobby } from '../../actions/meeting';

const useStyles = makeStyles(() =>
  createStyles({
    room: {
      backgroundColor: 'gray',
    },
  })
);

const Room = ({ returnToLobby, room, meetingID }) => {
  const classes = useStyles();
  const [showChat, setShowChat] = useState(true);

  const leaveRoom = () => {
    room.disconnect();
    returnToLobby();
  };

  const chatView = (e) => {
    e.preventDefault();
    setShowChat(!showChat);
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={9} className={classes.room}>
          <ParticipantGrid room={room} />
        </Grid>
        <Grid item xs={3}>
          {showChat && <Chatbox meetingId={meetingID} />}
        </Grid>
      </Grid>
      <RoomBottomBar leaveRoom={leaveRoom} chatView={chatView} />
    </>
  );
};

const mapStateToProps = (state) => ({
  room: state.meeting.room,
  meetingID: state.meeting.meetingID,
});

export default connect(mapStateToProps, { returnToLobby })(Room);
