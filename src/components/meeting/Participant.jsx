import React, { useState, useEffect } from 'react';
import Track from './Track';

const Participant = ({ participant, localParticipant }) => {
  const existingPublications = Array.from(participant.tracks.values());
  const existingTracks = existingPublications.map(
    (publication) => publication.track
  );
  const nonNullTracks = existingTracks.filter((track) => track !== null);

  const [tracks, setTracks] = useState(nonNullTracks);

  const addTrack = (track) => {
    setTracks([...tracks, track]);
  };

  useEffect(() => {
    if (!localParticipant) {
      participant.on('trackSubscribed', (track) => addTrack(track));
    }
  });

  return (
    <div>
      <div>
        {tracks.map((track) => (
          <Track key={track} track={track} />
        ))}
      </div>
    </div>
  );
};

export default Participant;
