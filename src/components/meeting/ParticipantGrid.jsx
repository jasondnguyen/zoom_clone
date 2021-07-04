import React, { useState, useEffect } from 'react';
import Participant from './Participant';
import { Grid } from '@material-ui/core';

const ParticipantGrid = ({ room }) => {
  const [remoteParticipants, setRemoteParticipants] = useState(
    Array.from(room.participants.values())
  );

  const addParticiapnt = (participant) => {
    setRemoteParticipants({ ...remoteParticipants, participant });
  };

  const removeParticipant = (participant) => {
    const newList = remoteParticipants.filter(
      (p) => p.identity != participant.identity
    );
    setRemoteParticipants(newList);
  };

  useEffect(() => {
    room.on('participantConnected', (participant) =>
      addParticipant(participant)
    );
    room.on('participantDisconnected', (participant) =>
      removeParticipant(participant)
    );
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <Participant
            key={room.localParticipant.identity}
            localParticipant="true"
            participant={room.localParticipant}
          />
        </Grid>
        {remoteParticipants.map((participant) => (
          <Grid item xs={1}>
            <Participant key={participant.identity} participant={participant} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ParticipantGrid;
