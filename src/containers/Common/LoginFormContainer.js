import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginForm from '../../components/Common/LoginForm';
import { loginUser } from '../../actions';

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const { isLoggingIn, loginError } = useSelector(mapStateToProps);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState();

  const handleSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      await dispatch(loginUser(email, password));
      return history.push('/groups');
    } catch (e) {
      setSubmitError(e.message);
    }
    setLoading(false);
    return null;
  };
  // TODO: if logged in use Redirect to '/'
  return (
    <LoginForm
      isLoggingIn={isLoggingIn}
      loginError={loginError}
      loading={loading}
      submitError={submitError}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginFormContainer;
