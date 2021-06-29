import React, { useEffect } from 'react';
import './App.global.css';
import '@fontsource/roboto';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Startup from './components/layout/Startup';
import Routes from './components/routing/Routes';
import MeetingHome from './components/meeting/MeetingHome';

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
          <Route exact path="/" component={MeetingHome} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
}
