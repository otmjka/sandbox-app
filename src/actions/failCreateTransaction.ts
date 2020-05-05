import { FAIL_CREATE_TRANSACTION } from '../actionTypes/transactions';

const failCreateTransaction = (payload) => ({
  type: FAIL_CREATE_TRANSACTION,
  payload
});

export default failCreateTransaction;
