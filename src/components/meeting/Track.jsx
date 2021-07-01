import React, { useEffect } from 'react';

const Track = (props) => {
  const ref = React.createRef();

  useEffect(() => {
    if (props.track != null) {
      const child = props.track.attach();
      ref.current.classList.add(props.track.kind);
      ref.current.appendChild(child);
    }
  });

  return <div ref={ref}></div>;
};

export default Track;
