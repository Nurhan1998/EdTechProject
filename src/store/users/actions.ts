import { AxiosError } from 'axios';

import { TSignInPesponseData, TSignUpModel } from 'store/users/types';

import createAction from 'utils/createAction';


export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';


export const signInRequest = createAction<TSignUpModel>(SIGN_IN_REQUEST);
export const signInSuccess = createAction<TSignInPesponseData>(SIGN_IN_SUCCESS);
export const signInFailure = createAction<AxiosError>(SIGN_IN_FAILURE);
