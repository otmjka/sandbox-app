import axios from 'axios';
import config from '../config';
import t from 'typy';

import {
  START_TRANSACTIONS_DATA,
  RECEIVE_TRANSACTIONS_DATA,
  FAIL_TRANSACTIONS_DATA
} from '../actionTypes/transactions';

import logoutUser from './logoutUser';

import { UserTransaction } from '../types/transactions';
import startFetchTransactions from './startFetchTransactions'
import failFetchTransactions from './failFetchTransactions'
import setFetchTransactions from './setFetchTransactions'

const baseUrl = config.common.baseUrl;


export const fetchUserTransactions = () => async (dispatch, getState) => {
  const {
    auth: { idToken, isAuthenticated }
  } = getState();
  if (!isAuthenticated) return
  try {
    dispatch(startFetchTransactions())
    const userInfo = await axios.request({
      url: '/api/protected/transactions',
      headers: { Authorization: `Bearer ${idToken}` },
      baseURL: `${baseUrl}`
    });
    if (userInfo.status === 200) {
      const transactions: UserTransaction = userInfo.data['trans_token'];
      dispatch(setFetchTransactions(transactions));
    }
  } catch (err) {
    if (t(err, 'response.status').isDefined) {
      dispatch(failFetchTransactions())
      // TODO: only if user is not auth
      dispatch(logoutUser());
    }
  }
};
