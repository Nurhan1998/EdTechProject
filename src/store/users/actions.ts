import { AxiosError } from 'axios';

import {
  IPagination,
  IProfileModel, IUsersListResponseData,
  TSignIn,
  TSignInResponseData,
  TSignUp,
  TSignUpResponseData
} from 'store/users/types';

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

export const FORGOT_PASSWORD_REQUEST = `${STATE_KEY}_FORGOT_PASSWORD_REQUEST`;
export const FORGOT_PASSWORD_SUCCESS = `${STATE_KEY}_FORGOT_PASSWORD_SUCCESS`;
export const FORGOT_PASSWORD_FAILURE = `${STATE_KEY}_FORGOT_PASSWORD_FAILURE`;

export const GET_USERS_LIST_REQUEST = `${STATE_KEY}_GET_USERS_LIST_REQUEST`;
export const GET_USERS_LIST_SUCCESS = `${STATE_KEY}_GET_USERS_LIST_SUCCESS`;
export const GET_USERS_LIST_FAILURE = `${STATE_KEY}_GET_USERS_LIST_FAILURE`;

export const GET_USERS_BY_SEARCH_REQUEST = `${STATE_KEY}_GET_USERS_BY_SEARCH_REQUEST`;
export const GET_USERS_BY_SEARCH_FAILURE = `${STATE_KEY}_GET_USERS_BY_SEARCH_FAILURE`;
export const GET_USERS_BY_SEARCH_SUCCESS = `${STATE_KEY}_GET_USERS_BY_SEARCH_SUCCESS`;

export const SET_USERS_COUNT = `${STATE_KEY}_SET_USERS_COUNT`;

export const signInRequest = createAction<TSignIn>(SIGN_IN_REQUEST);
export const signInSuccess = createAction<TSignInResponseData>(SIGN_IN_SUCCESS);
export const signInFailure = createAction<AxiosError>(SIGN_IN_FAILURE);

export const signUpRequest = createAction<TSignUp>(SIGN_UP_REQUEST);
export const signUpSuccess = createAction<TSignUpResponseData>(SIGN_UP_SUCCESS);
export const signUpFailure = createAction<AxiosError>(SIGN_UP_FAILURE);

export const getProfileRequest = createAction(GET_PROFILE_REQUEST);
export const getProfileSuccess = createAction<IProfileModel>(GET_PROFILE_SUCCESS);
export const getProfileFailure = createAction<AxiosError>(GET_PROFILE_FAILURE);

export const forgotPasswordRequest = createAction<{ email: string }>(FORGOT_PASSWORD_REQUEST);
export const forgotPasswordSuccess = createAction<boolean>(FORGOT_PASSWORD_SUCCESS);
export const forgotPasswordFailure = createAction<AxiosError>(FORGOT_PASSWORD_FAILURE);

export const getUsersListRequest = createAction<IPagination>(GET_USERS_LIST_REQUEST);
export const getUsersListSuccess = createAction<IUsersListResponseData[]>(GET_USERS_LIST_SUCCESS);
export const getUsersListFailure = createAction<AxiosError>(GET_USERS_LIST_FAILURE);

export const getUsersBySearchRequest = createAction<{ name: string }>(GET_USERS_BY_SEARCH_REQUEST);
export const getUsersBySearchSuccess = createAction<IUsersListResponseData[]>(GET_USERS_BY_SEARCH_SUCCESS);
export const getUsersBySearchFailure = createAction<AxiosError>(GET_USERS_BY_SEARCH_FAILURE);

export const setUsersCount = createAction<{total: number}>(SET_USERS_COUNT);
