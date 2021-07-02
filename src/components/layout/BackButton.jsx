import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const BackButton = ({ link }) => {
  return (
    <Button
      fullWidth
      component={Link}
      to={link}
      style={{
        borderRadius: '8px',
        marginTop: '1em',
        border: '2px solid #EDEDF4',
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
