import React, { useEffect } from 'react';
import io from 'socket.io-client';

const MeetingRoom = () => {
  const socket = io('http://localhost:5000/');

  useEffect(() => {
    socket.on('connection', () => {
      console.log('connected');
    });
  }, []);

  return <div>hi</div>;
};

export default MeetingRoom;
