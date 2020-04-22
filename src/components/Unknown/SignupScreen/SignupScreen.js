import React from 'react';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import messages from './messages';
import Layout from '../../Common/Layout';
import SignupForm from '../../../containers/Common/SignupFormContainer';

export default function SignupScreen() {
  return (
    <>
      <Layout>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Box display="flex" py={5} justifyContent="center">
            <Typography variant="h1" component="h1">
              <FormattedMessage {...messages.header} />
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <SignupForm />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
