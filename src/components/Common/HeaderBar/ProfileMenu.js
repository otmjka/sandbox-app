import React from 'react';
import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import messages from './messages';
import useStyles from './useStyles';

const ProfileMenu = ({ userProfile, anchorEl, onClose, logoutUser }) => {
  const classes = useStyles();
  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-search-account-menu';
  const renderLink = () =>
    React.forwardRef((itemProps, ref) => <Link ref={ref} {...itemProps} />);
  const { localChapter } = userProfile || { localChapter: 'groups/browse' };
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      getContentAnchorEl={null}
      open={isMenuOpen}
      onClose={onClose}
    >
      <MenuItem
        component={renderLink()}
        to="/profile/edit"
        onClick={onClose}
        className={classes.profileMenuItem}
      >
        <FormattedMessage {...messages.editProfile} />
      </MenuItem>
      <MenuItem
        to="/groups"
        component={renderLink()}
        onClick={onClose}
        className={classes.profileMenuItem}
      >
        <FormattedMessage {...messages.myGroups} />
      </MenuItem>
      <MenuItem
        component={renderLink()}
        to={`/${localChapter}`}
        onClick={onClose}
        className={classes.profileMenuItem}
      >
        <FormattedMessage {...messages.groupsBrowseMsg} />
      </MenuItem>
      <MenuItem
        component={renderLink()}
        to="/groups/create"
        onClick={onClose}
        className={classes.profileMenuItem}
      >
        <FormattedMessage {...messages.createGroup} />
      </MenuItem>
      <MenuItem
        component={renderLink()}
        to="/notifications"
        onClick={onClose}
        className={classes.profileMenuItem}
      >
        <FormattedMessage {...messages.notifications} />
      </MenuItem>
      <MenuItem
        className={clsx(classes.profileMenuLink, classes.profileMenuItem)}
        onClick={logoutUser}
      >
        <FormattedMessage {...messages.logout} />
      </MenuItem>
    </Menu>
  );
};

ProfileMenu.defaultProps = {
  anchorEl: undefined
};

ProfileMenu.propTypes = {
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired
};
export default ProfileMenu;
