import React, { useState, useEffect, Fragment } from 'react';
import Track from './Track';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    nameTag: {
      border: '1px black solid',
      backgroundColor: 'gray',
      color: 'white',
    },
  })
);

const Participant = ({ participant, localParticipant }) => {
  const classes = useStyles();
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
  }, []);

  return (
    <>
      {tracks.map((track) => (
        <Track key={track} track={track} />
      ))}
      <div className={classes.nameTag}> {participant.identity}</div>
    </>
  );
};

export default Participant;
