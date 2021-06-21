import React from 'react';
import './App.global.css';
import '@fontsource/roboto';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Startup from './components/auth/Startup';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import JoinMeeting from './components/meeting/JoinMeeting';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Startup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/joinmeeting" component={JoinMeeting} />
        </Switch>
      </Router>
    </Provider>
  );
}
