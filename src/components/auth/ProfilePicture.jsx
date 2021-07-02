import React, { useState, useEffect, Fragment } from 'react';
import { Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import defaultPicture from '../../../assets/defaultpicture.png';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    picture: {
      width: '400px',
      height: '250px',
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
          value: e.target.files[0],
          name: 'avatar',
        },
      };

      onChange(event);
    } catch (error) {
      setAlert('Please select an image.', 'error');
    }
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs="auto">
          <img
            src={displayedPicture}
            className={classes.picture}
            alt="profile"
          />
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
            style={{
              border: '1px solid black',
              width: '250px',
            }}
            size="small"
          >
            Select file
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default connect(null, { setAlert })(ProfilePicture);
