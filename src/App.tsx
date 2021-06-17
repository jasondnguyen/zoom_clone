import React from 'react';
import './App.global.css';
import '@fontsource/roboto';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Startup from './components/auth/Startup';
import Login from './components/auth/Login';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Startup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
