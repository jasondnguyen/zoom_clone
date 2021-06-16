import React from 'react';
import '@fontsource/roboto';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Startup from './components/auth/Startup';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Startup} />
      </Switch>
    </Router>
  );
}
