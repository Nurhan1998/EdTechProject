import { fromJS } from 'immutable';
import { AxiosError } from 'axios';

import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from 'store/users/actions';
import { IPayloadAction } from 'store/types';

import createReducer from 'utils/createReducer';
import { EStorageKeys, getStorageData } from 'utils/storageHelpers';

import { TProfileModel, TRecordOfUser, TUserStoreHandler } from './types';


const requestDummyState = {
  fetching: false,
  data: null,
  error: null,
};

const initialState: TRecordOfUser = fromJS({
  signIn: requestDummyState,
  token: getStorageData(EStorageKeys.TOKEN),
  profile: requestDummyState,
});

const setSignInFetching = (value: boolean) =>
  (state: TRecordOfUser): TRecordOfUser => state.setIn(['signIn', 'fetching'], value);
const setSignInData = (state: TRecordOfUser, action: IPayloadAction): TRecordOfUser =>
  state.setIn(['signIn', 'data'], fromJS(action.payload));
const setSignInFailure = (state: TRecordOfUser, action: IPayloadAction): TRecordOfUser =>
  state.setIn(['signIn', 'error'], action.payload);

const setProfileFetching = (value: boolean): TUserStoreHandler<void> => state =>
  state.setIn(['profile', 'fetching'], value);
const setProfileData: TUserStoreHandler<TProfileModel> = (state, action) =>
  state.setIn(['profile', 'data'], action.payload);
const setProfileError: TUserStoreHandler<AxiosError> = (state, action) =>
  state.setIn(['profile', 'error'], action.payload);

export default createReducer<TRecordOfUser>(initialState, {
  [SIGN_IN_REQUEST]: setSignInFetching(true),
  [SIGN_IN_SUCCESS]: [setSignInFetching(false), setSignInData],
  [SIGN_IN_FAILURE]: [setSignInFetching(false), setSignInFailure],

  [GET_PROFILE_REQUEST]: setProfileFetching(true),
  [GET_PROFILE_SUCCESS]: [setProfileFetching(false), setProfileData],
  [GET_PROFILE_FAILURE]: [setProfileFetching(false), setProfileError]
});
