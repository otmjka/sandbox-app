import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import messages from './messages';
import useStyles from './styles';

const LoginForm = ({ loading, submitError, onSubmit }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  return (
    <>
      <Card classes={{ root: classes.cardRoot }}>
        <Divider />
        <CardContent classes={{ root: classes.contentRoot }}>
          <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label={<FormattedMessage {...messages.emailPlaceholder} />}
              type="email"
              variant="outlined"
              fullWidth
              name="email"
              helperText={
                !!errors.email && (
                  <FormattedMessage {...messages.fieldRequired} />
                )
              }
              error={!!errors.email}
              inputRef={register({ required: true })}
            />
            <TextField
              label={<FormattedMessage {...messages.passwordPlaceholder} />}
              type="password"
              autoComplete="current-password"
              variant="outlined"
              fullWidth
              name="password"
              helperText={
                !!errors.password && (
                  <FormattedMessage {...messages.fieldRequiredAndMin6} />
                )
              }
              error={!!errors.password}
              inputRef={register({ required: true })}
            />

            {submitError && (
              <Alert severity="error" classes={{ root: classes.alertRoot }}>
                {submitError}
              </Alert>
            )}

            <Button
              variant="contained"
              size="large"
              disabled={loading}
              fullWidth
              color="primary"
              type="submit"
            >
              {!loading && <FormattedMessage {...messages.signinLabel} />}
              {loading && <FormattedMessage {...messages.loading} />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginForm;
