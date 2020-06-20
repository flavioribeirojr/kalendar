import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { EventHome } from '../../routes/EventHome/EventHome';
import { NewEvent } from '../../routes/NewEvent/NewEvent';

export function EventOutlet() {
  return (
    <Switch>
      <Route path="/" exact>
        <EventHome />
      </Route>
      <Route path="/new-event" exact>
        <NewEvent />
      </Route>
    </Switch>
  );
}