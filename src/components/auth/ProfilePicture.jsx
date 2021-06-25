import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import defaultPicture from '../../../assets/defaultpicture.png';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';

const useStyles = makeStyles(() =>
  createStyles({
    picture: {
      width: '250px',
      height: '200px',
      border: '1px solid black',
    },
  })
);

const ProfilePicture = ({ setAlert, onChange }) => {
  const classes = useStyles();
  const [displayedPicture, setDisplayedPicture] = useState(defaultPicture);

  const handleChange = (e) => {
    try {
      const newPic = URL.createObjectURL(e.target.files[0]);
      setDisplayedPicture(newPic);

      let event = {
        target: {
          value: newPic,
          name: 'avatar',
        },
      };

      onChange(event);
    } catch (error) {
      setAlert('Please select an image.', 'error');
    }
  };

  return (
    <div>
      <img src={displayedPicture} className={classes.picture} alt="profile" />
      <input
        id="img"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <Button
        component="label"
        for="img"
        style={{ border: '1px solid black', width: '250px', height: '20px' }}
        size="small"
      >
        Select file
      </Button>
    </div>
  );
};

export default connect(null, { setAlert })(ProfilePicture);
