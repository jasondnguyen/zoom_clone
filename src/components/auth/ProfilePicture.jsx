import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import defaultPicture from '../../../assets/defaultpicture.png';

const useStyles = makeStyles(() =>
  createStyles({
    picture: {
      width: '250px',
      height: '200px',
      border: '1px solid black',
    },
  })
);

const ProfilePicture = () => {
  const classes = useStyles();
  const [pictureSource, setPictureSource] = useState(defaultPicture);

  const handleChange = (e) => {
    try {
      const newPic = URL.createObjectURL(e.target.files[0]);
      setPictureSource(newPic);
    } catch (error) {
      setPictureSource(pictureSource);
    }
  };

  return (
    <div>
      <img src={pictureSource} className={classes.picture} alt="profile" />
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
};

export default ProfilePicture;
