import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './styles';
import Autocomplete from '../Autocomplete';
import { UserRecord } from '../../../types/user';
import messages from './messages';

export default function TransferForm({
  balance,
  users,
  submitError,

  register,
  handleSubmit,
  errors,
  setValue,

  userInitValue,
  setUserInitValue,

  sendMoney,
  onChangeFilter
}: TransferFormProps) {
  const { formatMessage } = useIntl();
  const classes = useStyles();

  useEffect(() => {
    register({ name: 'user' }, { required: 'required' });
  }, [register]);
  console.log(balance)
  return (
    <Paper>
      <Box p={4}>
        <Typography variant="h2">
          {formatMessage(messages.transferMoneyMsg)}
        </Typography>
        <Box py={4}>
          <form
            className={classes.root}
            onSubmit={handleSubmit((values: any) => sendMoney(values))}
          >
            <Box>
              <Autocomplete
                error={errors.user}
                initValue={userInitValue}
                setValue={setValue}
                inputLabel={formatMessage(messages.peoplePlaceholder)}
                users={users}
                onChangeFilter={onChangeFilter}
              />

              {errors.user && (
                <Box ml={2} mt={-2} mb={2}>
                  <FormHelperText style={{ color: '#F44336' }}>
                    <FormattedMessage {...messages.required} />
                  </FormHelperText>
                </Box>
              )}
            </Box>

            <Box pt={1}>
              <TextField
                label={<FormattedMessage {...messages.amountPlaceholder} />}
                type="number"
                variant="outlined"
                name="amount"
                helperText={!!errors.amount && errors.amount.message}
                error={!!errors.amount}
                inputRef={register({
                  required: 'required',
                  min: 1,
                  validate: {
                    max: value =>
                      parseInt(value) <= balance ||
                      formatMessage(messages.enoughMoneyMsg)
                  }
                })}
              />
            </Box>

            {submitError && (
              <Alert severity="error" classes={{ root: classes.alertRoot }}>
                {submitError}
              </Alert>
            )}
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
            >
              <FormattedMessage {...messages.sendMoneyMsg} />
            </Button>
          </form>
        </Box>
      </Box>
    </Paper>
  );
}

type TransferFormProps = {
  balance: number;
  submitError?: string;
  users: UserRecord[];
  register: any;
  errors: any;
  handleSubmit: any;
  setValue: any;

  userInitValue: any;
  setUserInitValue: any;

  sendMoney: (value: { user: UserRecord | null; amount: string }) => void;
  onChangeFilter: (filter: string) => void;
};
