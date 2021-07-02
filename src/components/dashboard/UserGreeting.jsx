import React, { Fragment } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  })
);

const UserGreeting = ({ user }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6}>
        <Avatar src={user.picture} className={classes.large} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h2" component="h1">
          {user.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default UserGreeting;
