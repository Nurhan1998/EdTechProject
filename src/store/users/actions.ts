import { AxiosError } from 'axios';

import { TProfileModel, TSignInModel, TSignInResponseData, TSignUpModel, TSignUpResponseData } from 'store/users/types';

import createAction from 'utils/createAction';

export const STATE_KEY = '@users';

export const SIGN_IN_REQUEST = `${STATE_KEY}_SIGN_IN_REQUEST`;
export const SIGN_IN_SUCCESS = `${STATE_KEY}_SIGN_IN_SUCCESS`;
export const SIGN_IN_FAILURE = `${STATE_KEY}_SIGN_IN_FAILURE`;

export const SIGN_UP_REQUEST = `${STATE_KEY}_SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${STATE_KEY}_SIGN_UP_SUCCESS`;
export const SIGN_UP_FAILURE = `${STATE_KEY}_SIGN_UP_FAILURE`;


export const GET_PROFILE_REQUEST = `${STATE_KEY}_GET_PROFILE_REQUEST`;
export const GET_PROFILE_SUCCESS = `${STATE_KEY}_GET_PROFILE_SUCCESS`;
export const GET_PROFILE_FAILURE = `${STATE_KEY}_GET_PROFILE_FAILURE`;


export const signInRequest = createAction<TSignInModel>(SIGN_IN_REQUEST);
export const signInSuccess = createAction<TSignInResponseData>(SIGN_IN_SUCCESS);
export const signInFailure = createAction<AxiosError>(SIGN_IN_FAILURE);

export const signUpRequest = createAction<TSignUpModel>(SIGN_UP_REQUEST);
export const signUpSuccess = createAction<TSignUpResponseData>(SIGN_UP_SUCCESS);
export const signUpFailure = createAction<AxiosError>(SIGN_UP_FAILURE);


export const getProfileRequest = createAction(GET_PROFILE_REQUEST);
export const getProfileSuccess = createAction<TProfileModel>(GET_PROFILE_SUCCESS);
export const getProfileFailure = createAction<AxiosError>(GET_PROFILE_FAILURE);

