import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';

import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

import Avatar from '@material-ui/core/Avatar';

import Logo from '../Logo';
import AuthBtnGroup from './AuthBtnGroup';
import HeaderUserData from './HeaderUserData';
import useStyles from './useStyles';
import { UserProfile } from '../../../types/user';

const HeaderBar = (props: HeaderBarProps) => {
  const { isAuthenticated, userProfile, logoutUser } = props;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const showUserData = isAuthenticated && userProfile;
  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
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
