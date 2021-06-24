import React, { useEffect } from 'react';
import './App.global.css';
import '@fontsource/roboto';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import Startup from './components/auth/Startup';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import JoinMeeting from './components/meeting/JoinMeeting';
import TopAlert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Startup} />
          <Route exact path="/login">
            <TopAlert />
            <Login />
          </Route>
          <Route exact path="/signup">
            <TopAlert />
            <Signup />
          </Route>
          <Route exact path="/joinmeeting" component={JoinMeeting} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}
