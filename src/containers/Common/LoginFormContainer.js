import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginForm from '../../components/Common/LoginForm';
import { loginUser } from '../../actions';

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState();

  const handleSubmit = async ({ email, password }) => {
    setLoading(true);
    const error = await dispatch(loginUser(email, password));
    if (!error) return history.push('/');
    setSubmitError(error.message);
    setLoading(false);
    return null;
  };
  return (
    <LoginForm
      loading={loading}
      submitError={submitError}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginFormContainer;
