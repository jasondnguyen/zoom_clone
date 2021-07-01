import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { returnToLobby } from '../../actions/meeting';
import Participant from './Participant';

const Room = ({ returnToLobby, room }) => {
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

  const leaveRoom = () => {
    room.disconnect();
    returnToLobby();
  };

  useEffect(() => {
    room.on('participantConnected', (participant) =>
      addParticipant(participant)
    );
    room.on('participantDisconnected', (participant) =>
      removeParticipant(participant)
    );

    return () => {
      leaveRoom();
    };
  }, []);

  return (
    <div className="room">
      <div className="participants">
        <Participant
          key={room.localParticipant.identity}
          localParticipant="true"
          participant={room.localParticipant}
        />
        {remoteParticipants.map((participant) => (
          <Participant key={participant.identity} participant={participant} />
        ))}
      </div>
      <button id="leaveRoom" onClick={leaveRoom}>
        Leave Room
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  room: state.meeting.room,
});

export default connect(mapStateToProps, { returnToLobby })(Room);
