import { RECEIVE_TRANSACTIONS_DATA } from '../actionTypes/transactions';

export default function setFetchTransactions(payload) {
  return {
    type: RECEIVE_TRANSACTIONS_DATA,
    payload
  };
}
