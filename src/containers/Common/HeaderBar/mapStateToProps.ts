import { UserState } from '../../../reducers/user/user';
import { AuthState } from '../../../reducers/auth/auth';
import { UserProfile } from '../../../types/user';

type State = {
  auth: AuthState;
  user: UserState;
};

type SelectedState = {
  isAuthenticated: boolean;
  userProfile?: UserProfile;
};

export default function mapStateToProps(state: State): SelectedState {
  const {
    auth: { isAuthenticated },
    user: { userData }
  } = state;
  return { isAuthenticated, userProfile: userData };
}
