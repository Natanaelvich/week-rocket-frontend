import React from 'react';
import { Switch } from 'react-router-dom';

import Private from './private';
import Guest from './guest';

import Main from '../pages/Main';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Private path="/" exact component={Main} />
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
    </Switch>
  );
}
