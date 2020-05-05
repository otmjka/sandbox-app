import React from 'react';
import {useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import Typography from '@material-ui/core/Typography';

import Layout from '../../Common/Layout';

import messages from './messages';
import useStyles from './styles';

export default function HomeScreen() {
  const classes = useStyles();
  const {formatMessage} = useIntl()
  return (
    <>
      <Layout type="home">
        <Typography variant="h2">{formatMessage(messages.headerMsg)}</Typography>
      </Layout>
    </>
  );
}
