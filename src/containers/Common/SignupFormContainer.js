import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SignupForm from '../../components/Common/SignupForm';
import { signupUser } from '../../actions';

const SignupFormContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState();

  const handleSubmit = async ({ username, email, password }) => {
    setLoading(true);
    const error = await dispatch(signupUser({username, email, password}));
    if (!error) return history.push('/');
    setSubmitError(error.message);
    setLoading(false);
    return null;
  };

  return (
    <SignupForm
      loading={loading}
      submitError={submitError}
      onSubmit={handleSubmit}
    />
  );
};

export default SignupFormContainer;
