import React, { useState, useEffect, Fragment } from 'react';
import ParticipantGrid from './ParticipantGrid';
import Chatbox from './Chatbox';
import RoomBottomBar from './RoomBottomBar';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { returnToLobby } from '../../actions/meeting';

const Room = ({ returnToLobby, room, meetingID }) => {
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
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <ParticipantGrid room={room} />
          {showChat && <Chatbox meetingId={meetingID} room={room} />}
        </Grid>
        <Grid item>
          <RoomBottomBar leaveRoom={leaveRoom} chatView={chatView} />
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  room: state.meeting.room,
  meetingID: state.meeting.meetingID,
});

export default connect(mapStateToProps, { returnToLobby })(Room);
