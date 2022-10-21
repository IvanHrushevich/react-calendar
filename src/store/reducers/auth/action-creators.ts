import axios from 'axios';

import { AppDispatch } from './../../index';
import { User } from '../../../models/User';
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from './models';

export const AuthActionCreators = {
  setUser: (user: User): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (isAuth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: isAuth }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: error }),

  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));

      // fake timeout just to simulate http call
      setTimeout(async () => {
        const response = await axios.get<User[]>('./users.json');
        const user: User | undefined = response.data.find(
          (user) => user.username === username && user.password === password
        );

        if (user) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', user.username);
          dispatch(AuthActionCreators.setIsAuth(true));
          dispatch(AuthActionCreators.setUser(user));
        } else {
          dispatch(AuthActionCreators.setError('Wrong username or password'));
        }

        dispatch(AuthActionCreators.setIsLoading(false));
      }, 1500);
    } catch (error) {
      dispatch(AuthActionCreators.setError('Log in error'));
      dispatch(AuthActionCreators.setIsLoading(false));
    }
  },
};
