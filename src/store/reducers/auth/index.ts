import { AuthState, AuthAction, AuthActionEnum } from './models';

const INITIAL_STATE: AuthState = {
  isAuth: false,
  user: null,
  isLoading: false,
  error: '',
};

export default function authReducer(state = INITIAL_STATE, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };

    case AuthActionEnum.SET_USER:
      return { ...state, user: action.payload, isLoading: false };

    case AuthActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case AuthActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
}
