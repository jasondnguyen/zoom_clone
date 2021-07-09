import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, makeStyles, createStyles } from '@material-ui/core';
import UserGreeting from './UserGreeting';
import { Link } from 'react-router-dom';
import { signOut } from '../../actions/auth';

const useStyles = makeStyles(() =>
  createStyles({
    buttons: {
      marginTop: '2em',
      width: '50vw',
    },
  })
);

const Dashboard = ({ user, signOut }) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item>
          <UserGreeting user={user} />
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/joinmeeting"
            variant="contained"
            color="primary"
            className={classes.buttons}
            fullWidth
          >
            Join Meeting
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            variant="contained"
            fullWidth
            className={classes.buttons}
            onClick={signOut}
          >
            Sign out
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { signOut })(Dashboard);
