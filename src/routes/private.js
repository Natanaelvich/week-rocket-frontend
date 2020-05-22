import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropsTypes from 'prop-types';

import store from '~/store';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      store.getState().user.signedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: 'signin', state: { from: props.location } }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropsTypes.func.isRequired,
};

export default PrivateRoute;
