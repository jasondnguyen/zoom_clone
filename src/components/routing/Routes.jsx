import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import JoinMeeting from '../meeting/JoinMeeting';
import TopAlert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';

const Routes = (props) => {
  return (
    <Container>
      <TopAlert />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/joinmeeting" component={JoinMeeting} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Container>
  );
};

export default Routes;
