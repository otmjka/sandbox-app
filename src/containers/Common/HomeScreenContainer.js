import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeScreen from '../../components/Unknown/HomeScreen';
import { getUserProfile } from '../../actions/getUserProfile';

import AuthContext from './AuthContext';
import ProfileContext from '../User/ProfileContext';

export default function HomeScreenContainer() {
  const { auth, user } = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  useEffect(() => {
    const { isAuthenticated } = auth;
    if (!isAuthenticated) return;
    dispatch(getUserProfile());
  }, [dispatch, auth]);

  return (
    <AuthContext.Provider value={auth}>
      <ProfileContext.Provider value={user}>
        <HomeScreen />
      </ProfileContext.Provider>
    </AuthContext.Provider>
  );
}

function mapStateToProps(state) {
  const { auth, user } = state;
  return { auth, user };
}
