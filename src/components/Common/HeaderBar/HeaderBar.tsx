import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';

import Logo from '../Logo';
import AuthBtnGroup from './AuthBtnGroup';
import HeaderUserData from './HeaderUserData';
import useStyles from './useStyles';
import { UserProfile } from '../../../types/user';

const HeaderBar = (props: HeaderBarProps) => {
  const { isAuthenticated, userProfile, logoutUser } = props;

  const classes = useStyles();
  const showUserData = isAuthenticated && userProfile;
  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{ root: classes.appBar }}>
        <Toolbar className={classes.toolBar}>
          <Logo />
          <div className={classes.grow} />
          {!isAuthenticated && <AuthBtnGroup />}
          {/* Logged state */}
          {showUserData && (
            <HeaderUserData userProfile={userProfile} logoutUser={logoutUser} />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

type HeaderBarProps = {
  isAuthenticated: boolean;
  userProfile: UserProfile;
  logoutUser: () => void;
};

export default HeaderBar;
