import React, { useEffect } from 'react';
import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:5000/';

export default function JoinMeeting() {
  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on('connection', () => {
      console.log('hello');
    });
  }, []);

  return <div>hi</div>;
}
