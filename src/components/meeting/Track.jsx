import React, { useEffect } from 'react';

const Track = ({ track, tracks }) => {
  let ref = React.createRef();

  useEffect(() => {
    if (track != null) {
      const child = track.attach();
      ref.current.classList.add(track.kind);
      ref.current.appendChild(child);
    }
  }, [tracks]);

  return <div ref={ref}></div>;
};

export default Track;
