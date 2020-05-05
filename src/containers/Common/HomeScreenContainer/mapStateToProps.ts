import { UserRecord } from '../../../types/user';
import { UserTransaction } from '../../../types/transactions';

type HomeSelector = {
  isAuthenticated: boolean;
  users: UserRecord[];
  transactions: UserTransaction[];
  balance: number;
};

export default function mapStateToProps(state) {
  const {
    auth: { isAuthenticated },
    user: {userData},
    users: { users },
    transactions: { transactions }
  } = state;
  const {balance} = userData || {}
  // : { userData: { balance } = {} } = {userData: {}}
  return { isAuthenticated, users, transactions, balance };
}
