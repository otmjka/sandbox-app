import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from '../../../containers/Common/HomeScreenContainer';
import LoginScreen from '../../Unknown/LoginScreen';
import SignupScreen from '../../Unknown/SignupScreen';

import ProtectedRoute from '../ProtectedRoute';
// `component`s should have same values to reuse them in `Switch`
// details are here: https://github.com/ReactTraining/react-router/issues/4578#issuecomment-282081567
const routes = ({ isAuthenticated, isVerifying }) => (
  <Switch>
    <Route path="/login" exact component={LoginScreen} />
    <Route path="/signup" exact component={SignupScreen} />
    {/*<ProtectedRoute
      exact
      path="/notifications"
      component={NotificationsScreen}
      isAuthenticated={isAuthenticated}
      isVerifying={isVerifying}
    />*/}
    <Route path="/" exact component={HomeScreen} />
  </Switch>
);

const Routes = ({ isAuthenticated, isVerifying }) =>
  routes({ isAuthenticated, isVerifying });

export default Routes;
