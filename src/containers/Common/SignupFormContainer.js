import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SignupForm from '../../components/Common/SignupForm';
import { signupUser } from '../../actions';

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const SignupFormContainer = () => {
  const dispatch = useDispatch();
  const { isLoggingIn, loginError, isAuthenticated } = useSelector(
    mapStateToProps
  );
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState();

  const handleSubmit = async ({ email, firstName, lastName, password }) => {
    setLoading(true);
    try {
      const authUser = await dispatch(signupUser(email, password));
    } catch (e) {
      setSubmitError(e.message);
    }
    setLoading(false);
  };
  if (isAuthenticated && !loading) {
    return <Redirect to="/" />;
  }
  return (
    <SignupForm
      isLoggingIn={isLoggingIn}
      loginError={loginError}
      loading={loading}
      submitError={submitError}
      isAuthenticated={isAuthenticated}
      onSubmit={handleSubmit}
    />
  );
};

export default SignupFormContainer;
