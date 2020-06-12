import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { EventHome } from '../../routes/EventHome/EventHome';

export function EventOutlet() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <EventHome />
        </Route>
      </Switch>
    </Router>
  );
}