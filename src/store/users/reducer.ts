import { fromJS } from 'immutable';
import { AxiosError } from 'axios';

import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS, GET_USERS_LIST_FAILURE, GET_USERS_LIST_REQUEST, GET_USERS_LIST_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from 'store/users/actions';
import { IPayloadAction } from 'store/types';

import createReducer from 'utils/createReducer';
import { EStorageKeys, getStorageData } from 'utils/storageHelpers';

import { IProfileModel, IUsersListResponseData, TRecordOfUser, TUserStoreHandler } from './types';


const requestDummyState = {
  fetching: false,
  data: null,
  error: null,
};

const initialState: TRecordOfUser = fromJS({
  signIn: requestDummyState,
  token: getStorageData(EStorageKeys.TOKEN),
  profile: requestDummyState,
  signUp: requestDummyState,
  forgotPassword: requestDummyState,
  usersList: requestDummyState
});

const setSignInFetching = (value: boolean) =>
  (state: TRecordOfUser): TRecordOfUser => state.setIn(['signIn', 'fetching'], value);
const setSignInData = (state: TRecordOfUser, action: IPayloadAction): TRecordOfUser =>
  state.setIn(['signIn', 'data'], fromJS(action.payload));
const setSignInFailure = (state: TRecordOfUser, action: IPayloadAction): TRecordOfUser =>
  state.setIn(['signIn', 'error'], action.payload);

const setSignUpFetching = (value: boolean) =>
  (state: TRecordOfUser): TRecordOfUser => state.setIn(['signUp', 'fetching'], value);
const setSignUpData = (state: TRecordOfUser, action: IPayloadAction): TRecordOfUser =>
  state.setIn(['signUp', 'data'], fromJS(action.payload));
const setSignUpFailure = (state: TRecordOfUser, action: IPayloadAction): TRecordOfUser =>
  state.setIn(['signUp', 'error'], action.payload);

const setProfileFetching = (value: boolean): TUserStoreHandler<void> => state =>
  state.setIn(['profile', 'fetching'], value);
const setProfileData: TUserStoreHandler<IProfileModel> = (state, action) =>
  state.setIn(['profile', 'data'], action.payload);
const setProfileError: TUserStoreHandler<AxiosError> = (state, action) =>
  state.setIn(['profile', 'error'], action.payload);

const setForgotPasswordFetching = (value: boolean): TUserStoreHandler<void> => state =>
  state.setIn(['forgotPassword', 'fetching'], value);
const setForgotPasswordData: TUserStoreHandler<boolean> = (state, action) =>
  state.setIn(['forgotPassword', 'data'], action.payload);
const setForgotPasswordError: TUserStoreHandler<AxiosError> = (state, action) =>
  state.setIn(['forgotPassword', 'error'], action.payload);

const setUsersListFetching = (value: boolean): TUserStoreHandler<void> => state =>
  state.setIn(['usersList', 'fetching'], value);
const setUsersListData: TUserStoreHandler<IUsersListResponseData> = (state, action) =>
  state.setIn(['usersList', 'data'], fromJS(action.payload));
const setUsersListError: TUserStoreHandler<AxiosError> = (state, action) =>
  state.setIn(['usersList', 'error'], action.payload);

export default createReducer<TRecordOfUser>(initialState, {
  [SIGN_IN_REQUEST]: setSignInFetching(true),
  [SIGN_IN_SUCCESS]: [setSignInFetching(false), setSignInData],
  [SIGN_IN_FAILURE]: [setSignInFetching(false), setSignInFailure],

  [SIGN_UP_REQUEST]: setSignUpFetching(true),
  [SIGN_UP_SUCCESS]: [setSignUpFetching(false), setSignUpData],
  [SIGN_UP_FAILURE]: [setSignUpFetching(false), setSignUpFailure],

  [GET_PROFILE_REQUEST]: setProfileFetching(true),
  [GET_PROFILE_SUCCESS]: [setProfileFetching(false), setProfileData],
  [GET_PROFILE_FAILURE]: [setProfileFetching(false), setProfileError],

  [FORGOT_PASSWORD_REQUEST]: setForgotPasswordFetching(true),
  [FORGOT_PASSWORD_SUCCESS]: [setForgotPasswordFetching(false), setForgotPasswordData],
  [FORGOT_PASSWORD_FAILURE]: [setForgotPasswordFetching(false), setForgotPasswordError],

  [GET_USERS_LIST_REQUEST]: setUsersListFetching(true),
  [GET_USERS_LIST_SUCCESS]: [setUsersListFetching(false), setUsersListData],
  [GET_USERS_LIST_FAILURE]: [setUsersListFetching(false), setUsersListError]
});
