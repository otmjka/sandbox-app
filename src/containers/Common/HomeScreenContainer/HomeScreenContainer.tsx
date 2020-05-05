import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withSnackbar } from 'notistack';

import createTransaction from '../../../actions/createTransaction';
import { getFilteredUserList } from '../../../actions/getFilteredUserList';
import { fetchUserTransactions } from '../../../actions/fetchUserTransactions';
import mapStateToProps from './mapStateToProps';

import HomeScreen from '../../../components/Unknown/HomeScreen';
import WelcomeScreen from '../../../components/Common/WelcomeScreen';

import { UserRecord } from '../../../types/user';

function HomeScreenContainer({enqueueSnackbar}) {
  const [loadingSend, setLoadingSend] = useState(false);
  const { isAuthenticated, users, transactions } = useSelector(mapStateToProps);
  const [selectedUser, setSelectedUser] = useState<UserRecord | null>(null);
  const dispatch = useDispatch();
  const [submitError, setSubmitError] = useState();

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(fetchUserTransactions());
  }, [dispatch, isAuthenticated]);

  const handleChangeFilter = (filter: string) => {
    dispatch(getFilteredUserList(filter));
  };

  const handleSendMoney = async (values) => {
    const {user, amount} = values
    setLoadingSend(true);
    const error = await dispatch(createTransaction({user, amount}))
    if (error) {
      setSubmitError(error.message);
    }
    enqueueSnackbar('PW was successfully sended!');
    setLoadingSend(false);
  }

  if (!isAuthenticated) {
    return <WelcomeScreen />;
  }

  return (
    <HomeScreen
      transactions={transactions}
      users={users}
      submitError={submitError}
      sendMoney={handleSendMoney}
      onChangeFilter={handleChangeFilter}
    />
  );
}

export default withSnackbar(HomeScreenContainer)
