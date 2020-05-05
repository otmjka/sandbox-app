import { FAIL_TRANSACTIONS_DATA } from '../actionTypes/transactions';

const failFetchTransactions = () => ({
  type: FAIL_TRANSACTIONS_DATA
});

export default failFetchTransactions;
