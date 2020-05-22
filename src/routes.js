import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
}
