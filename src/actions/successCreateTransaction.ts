import { SUCCESSFUL_CREATE_TRANSACTION } from '../actionTypes/transactions';

import { UserTransaction } from '../types/transactions';

const successCreateTransaction = (transaction: UserTransaction) => ({
  type: SUCCESSFUL_CREATE_TRANSACTION,
  payload: transaction
});

export default successCreateTransaction;
