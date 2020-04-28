import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Logo from '../Logo';

import messages from './messages';
import useStyles from './useStyles';

import AuthContext from '../../../containers/Common/AuthContext'
import ProfileContext from '../../../containers/User/ProfileContext'

const HeaderBar = ({ isAuthenticated, logoutUser, userProfile }) => {
  const profile = useContext(ProfileContext)
  const {loaded, userData} = profile
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{ root: classes.appBar }}>
        <Toolbar className={classes.toolBar}>
          <Logo />
          <div className={classes.grow} />
          {!isAuthenticated && (
            <>
              <div className={classes.authGroup}>
                <Button
                  size="large"
                  variant="contained"
                  component={Link}
                  color="primary"
                  to="/login"
                >
                  <FormattedMessage {...messages.login} />
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  component={Link}
                  to="/signup"
                  color="secondary"
                >
                  <FormattedMessage {...messages.signup} />
                </Button>
              </div>
            </>
          )}
          {/* Logged state */}
          {isAuthenticated && (
            <div>
              <IconButton onClick={handleMenuOpen}>Avatar</IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;
