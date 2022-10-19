import { AuthState, AuthAction, AuthActionEnum } from './models';

const INITIAL_STATE: AuthState = {
  isAuth: false,
};

export default function authReducer(state = INITIAL_STATE, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };

    default:
      return state;
  }
}
