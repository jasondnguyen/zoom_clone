import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import JoinMeeting from './JoinMeeting';
import Room from './Room';

const MeetingHome = ({ room }) => {
  return <>{room === null ? <JoinMeeting /> : <Room />}</>;
};

const mapStateToProps = (state) => ({
  room: state.meeting.room,
});

export default connect(mapStateToProps, {})(MeetingHome);
