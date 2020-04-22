import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  location,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (isVerifying) return <div />;
      if (isAuthenticated) return <Component {...props} />;

      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      );
    }}
  />
);

ProtectedRoute.defaultProps = {
  location: undefined,
};

ProtectedRoute.propTypes = {
  location: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  isVerifying: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;
