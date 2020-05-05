import axios from 'axios';
import config from '../config';
import t from 'typy';

import {
  START_CREATE_TRANSACTION,
  SUCCESSFUL_CREATE_TRANSACTION,
  FAIL_CREATE_TRANSACTION
} from '../actionTypes/transactions';

import logoutUser from './logoutUser';
import {getUserProfile} from './getUserProfile';

import { UserTransaction } from '../types/transactions';
import startCreateTransaction from './startCreateTransaction';
import failCreateTransaction from './failCreateTransaction';
import successCreateTransaction from './successCreateTransaction';

const baseUrl = config.common.baseUrl;

export default function createTransaction({user, amount}) {
  return async (dispatch, getState) => {
    const {
      auth: { idToken }
    } = getState();
    const {name} = user
    try {
      dispatch(startCreateTransaction());
      const userInfo = await axios.request({
        url: '/api/protected/transactions',
        method: 'POST',
        headers: { Authorization: `Bearer ${idToken}` },
        baseURL: `${baseUrl}`,
        data: { name, amount }
      });

      if (userInfo.status === 200) {
        const transaction: UserTransaction = {
          ...userInfo.data['trans_token']
        };
        dispatch(successCreateTransaction(transaction));
        dispatch(getUserProfile())
      }
    } catch (err) {
      if (t(err, 'response.status').isDefined) {
        dispatch(failCreateTransaction(err.response.status));
      }
      if (t(err, 'response.status').isDefined) {
        return { message: err.response.data }
      } else {
      return { message: 'unnown error' };
      }
    }
  };
}
