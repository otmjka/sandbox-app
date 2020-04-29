import React from 'react';
import { FormattedMessage } from 'react-intl';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { UserProfile } from '../../../types/user';

import messages from './messages';

export default function HeaderUserData(props: HeaderUserDataProps) {
  const { userProfile, logoutUser } = props;
  return (
    <Box display="flex" alignItems="center">
      <Box mr={2}>
        <Typography variant="subtitle1" color="primary">
          {userProfile.name}
        </Typography>
      </Box>
      <Box mr={2}>
        <Typography variant="subtitle1" color="primary">
          <FormattedMessage {...messages.balanceMsg} /> {userProfile.balance} PW
        </Typography>
      </Box>

      <Button size="large" variant="contained" onClick={logoutUser}>
        <FormattedMessage {...messages.logout} />
      </Button>
    </Box>
  );
}

type HeaderUserDataProps = {
  userProfile: UserProfile;
  logoutUser: () => void;
};
