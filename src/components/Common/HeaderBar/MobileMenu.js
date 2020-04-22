import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Button from '../Button';

import messages from './messages';
import useStyles from './useStyles';

const MobileMenu = ({
  userProfile,
  isAuthenticated,
  isOpen,
  onClose,
  logoutUser
}) => {
  const classes = useStyles();
  const { localChapter } = userProfile || { localChapter: 'groups/browse' };
  const drawerUnknown = (
    <div className={classes.drawerAuthGroup}>
      <Button component={Link} color="primary" to="/login">
        <FormattedMessage {...messages.login} />
      </Button>
      <Button component={Link} to="/signup" color="secondary">
        <FormattedMessage {...messages.signup} />
      </Button>
    </div>
  );

  const drawerUser = (
    <div>
      <List>
        <ListItem onClick={onClose}>
          <ListItemText>
            <Link to="/profile/edit" className={classes.listItemTextRoot}>
              <FormattedMessage {...messages.editProfile} />
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem onClick={onClose}>
          <ListItemText>
            <Link to="/groups" className={classes.listItemTextRoot}>
              <FormattedMessage {...messages.myGroups} />
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem onClick={onClose}>
          <ListItemText>
            <Link to="/groups/browse" className={classes.listItemTextRoot}>
              <FormattedMessage {...messages.groupsBrowseMsg} />
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem onClick={onClose}>
          <ListItemText>
            <Link to="/groups/create" className={classes.listItemTextRoot}>
              <FormattedMessage {...messages.createGroup} />
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem onClick={onClose}>
          <ListItemText>
            <Link to="/notifications" className={classes.listItemTextRoot}>
              <FormattedMessage {...messages.notifications} />
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem onClick={logoutUser}>
          <ListItemText>
            <Link to="/" className={classes.listItemTextRoot}>
              <FormattedMessage {...messages.logout} />
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const drawer = isAuthenticated ? drawerUser : drawerUnknown;

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={isOpen}
          onClose={onClose}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          <IconButton onClick={onClose} className={classes.closeMenuButton}>
            <CloseIcon style={{ color: '#fff' }} fontSize="large" />
          </IconButton>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired
};

export default MobileMenu;
