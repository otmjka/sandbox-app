import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Layout from '../../Common/Layout';
import TransferForm from '../../User/TransferForm';
import Transactions from '../../User/Transactions';

import { UserRecord } from '../../../types/user';
import { UserTransaction } from '../../../types/transactions';

export default function HomeScreen({
  loadingSend,
  balance,
  submitError,
  transactions,
  users,

  sendMoney,
  onChangeFilter
}: HomeScreenProps) {
  const { register, handleSubmit, errors, setValue } = useForm();
  const [userInitValue, setUserInitValue] = useState<UserRecord | null>(null);
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

  return (
    <>
      <Layout type="home">
        <Container maxWidth="lg" style={{ maxWidth: '970px' }}>
        <Box mt={4}>
          <TransferForm
            loadingSend={loadingSend}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            setValue={setValue}

            balance={balance}
            users={users}
            userInitValue={userInitValue}
            setUserInitValue={setUserInitValue}
            submitError={submitError}
            sendMoney={sendMoney}
            onChangeFilter={onChangeFilter}
          />
          <Transactions transactions={transactions} onRepeat={handleRepeat} />
          </Box>
        </Container>
      </Layout>
    </>
  );
}

type HomeScreenProps = {
  loadingSend: boolean;
  balance: number;
  transactions: UserTransaction[];
  submitError?: string;
  users: UserRecord[];
  sendMoney: (value: { user: UserRecord | null; amount: string }) => void;
  onChangeFilter: (filter: string) => void;
};
