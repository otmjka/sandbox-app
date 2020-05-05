import {
  START_TRANSACTIONS_DATA,
  RECEIVE_TRANSACTIONS_DATA,
  FAIL_TRANSACTIONS_DATA,
  START_CREATE_TRANSACTION,
  SUCCESSFUL_CREATE_TRANSACTION,
  FAIL_CREATE_TRANSACTION
} from '../../actionTypes/transactions';

import { UserTransaction } from '../../types/transactions';

export type TransactionsState = {
  fetchLoading: boolean;
  setLoading: boolean;
  transactions: UserTransaction[];
  errorFetch?: number;
  errorSet?: number;
};

export default (
  state: TransactionsState = {
    fetchLoading: false,
    setLoading: false,
    transactions: [],
    errorFetch: undefined,
    errorSet: undefined,
  },
  action
) => {
  switch (action.type) {
    case START_TRANSACTIONS_DATA:
      return {
        ...state,
        fetchLoading: true,
        errorFetch: undefined
      };
    case RECEIVE_TRANSACTIONS_DATA:
      return {
        ...state,
        fetchLoading: false,
        transactions: action.payload,
      };
    case FAIL_TRANSACTIONS_DATA:
      return {
        ...state,
        fetchLoading: false,
        transactions: action.payload,
        errorFetch: action.payload
      };

      case START_CREATE_TRANSACTION:
        return {
          ...state,
          setLoading: true,
          errorSet: undefined
        };
      case SUCCESSFUL_CREATE_TRANSACTION:
        return {
          ...state,
          setLoading: false,
          transactions: [action.payload, ...state.transactions],
        };
      case FAIL_CREATE_TRANSACTION:
        return {
          ...state,
          setLoading: false,
          transactions: [],
          errorSet: action.payload
        };

    default:
      return state;
  }
};
