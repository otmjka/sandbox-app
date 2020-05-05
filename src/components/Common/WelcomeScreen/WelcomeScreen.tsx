import React from 'react';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Layout from '../../Common/Layout';

import messages from './messages';
import useStyles from './styles';

export default function HomeScreen() {
  const classes = useStyles();
  const { formatMessage } = useIntl();
  return (
    <>
      <Layout type="home">
        <Grid container>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" pt={8} mb={2}>
              <Typography variant="h2">
                {formatMessage(messages.headerMsg)}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" mb={2}>
              <Typography>{formatMessage(messages.bodyMsg)}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
