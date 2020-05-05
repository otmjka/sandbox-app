import { UserRecord } from '../../../types/user';
import { UserTransaction } from '../../../types/transactions';

type HomeSelector = {
  isAuthenticated: boolean;
  users: UserRecord[];
  transactions: UserTransaction[];
}

export default function mapStateToProps(state) {
  const {auth: {isAuthenticated}, users: {users}, transactions: {transactions}} = state
  return {isAuthenticated, users, transactions}
}
