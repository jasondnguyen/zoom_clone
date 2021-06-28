import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Webcam from 'react-webcam';
import { ReactMic } from 'react-mic';

const MeetingRoom = () => {
  const WebcamComponent = () => <Webcam />;

  return (
    <div>
      <Webcam />
      <ReactMic record={true} />
    </div>
  );
};

export default MeetingRoom;

// const socket = io('http://localhost:5000/');
// useEffect(() => {
//     socket.on('connection', () => {
//       console.log('connected');
//     });
//   }, []);
