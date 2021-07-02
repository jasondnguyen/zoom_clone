import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import UserGreeting from './UserGreeting';
import { Button, Link } from '@material-ui/core';
import { signOut } from '../../actions/auth';

const Dashboard = ({ user, signOut }) => {
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
