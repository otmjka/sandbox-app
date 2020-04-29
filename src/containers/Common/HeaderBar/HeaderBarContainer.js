import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import HeaderBar from '../../../components/Common/HeaderBar';
import mapStateToProps from './mapStateToProps'
import logoutUser from '../../../actions/logoutUser'
import { getUserProfile } from '../../../actions/getUserProfile';

const HeaderBarContainer = () => {
  const selected = useSelector(mapStateToProps)
  const {isAuthenticated, userProfile} = selected
  const dispatch = useDispatch();

  const logoutUserHandler = () => {
    dispatch(logoutUser())
  }
  // mb header bar is a right place where should be fetching instead
  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(getUserProfile());
  }, [dispatch, isAuthenticated]);
  return <HeaderBar isAuthenticated={isAuthenticated} userProfile={userProfile} logoutUser={logoutUserHandler} />;
};

export default HeaderBarContainer;
