import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';

import messages from './messages';
import useStyles from './useStyles';

export default function AuthBtnGroup() {
  const classes = useStyles();
  return (
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
  )
}
