import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
// import TransferForm from '../../User/TransferForm';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';

import Layout from '../../Common/Layout';
import Autocomplete from '../../User/Autocomplete';
import Transactions from '../../User/Transactions';

import { UserRecord } from '../../../types/user';
import { UserTransaction } from '../../../types/transactions';

import messages from './messages';
import useStyles from './styles';

export default function HomeScreen({
  users,
  transactions,
  submitError,

  sendMoney,
  onChangeFilter
}: HomeScreenProps) {
  const classes = useStyles();
  const { formatMessage } = useIntl();
  const { register, handleSubmit, errors, setValue, getValues } = useForm();
  const [userInitValue, setUserInitValue] = useState<UserRecord | null>(null);
  useEffect(() => {
    register({ name: 'user' }, { required: true });
  }, [register]);

  const handleRepeat = ({
    user,
    amount
  }: {
    user: UserRecord;
    amount: any;
  }) => {
    setUserInitValue(user);
    setValue('amount', amount);
  };
  const showTransactions = !!transactions;
  console.log(errors, userInitValue);
  return (
    <>
      <Layout type="home">
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
                  initValue={userInitValue}
                  setValue={setValue}
                  inputLabel={formatMessage(messages.peoplePlaceholder)}
                  users={users}
                  onChangeFilter={onChangeFilter}
                />

                  {errors.user && (
                    <Box ml={2} mt={-2} mb={2}>
                    <FormHelperText style={{color: '#F44336'}}>
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
                      max: {
                        value: 10,
                        message: formatMessage(messages.enoughMoneyMsg)
                      }
                    })}
                  />
                </Box>
                {/*
                disabled={loading}
                className={classes.grow}
              */}
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
        <Paper>
          <Box p={4}>
            <Box py={2}>
              <Typography variant="h2">
                {formatMessage(messages.transactionsMsg)}
              </Typography>
            </Box>
            <Transactions transactions={transactions} onRepeat={handleRepeat} />
          </Box>
        </Paper>
      </Layout>
    </>
  );
}

type HomeScreenProps = {
  // selectedUser: UserRecord | null;
  transactions: UserTransaction[];
  submitError?: string;
  users: UserRecord[];
  sendMoney: (value: { user: UserRecord | null; amount: string }) => void;
  // onChangeValue: (value: UserRecord | null) => void;
  onChangeFilter: (filter: string) => void;
};
