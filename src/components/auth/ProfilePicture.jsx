import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, createStyles, makeStyles, Grid } from '@material-ui/core';
import defaultPicture from '../../../assets/defaultpicture.png';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() =>
  createStyles({
    picture: {
      width: '300px',
      height: '250px',
      border: '1px solid black',
      objectFit: 'cover',
    },
    uploadButton: {
      border: '1px solid black',
      width: '305px',
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
        </Grid>
        <Grid item>
          <Button
            component="label"
            for="img"
            className={classes.uploadButton}
            size="small"
          >
            Select file
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

ProfilePicture.propTypes = {
  onChange: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(ProfilePicture);
