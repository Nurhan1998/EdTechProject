import { fromJS } from 'immutable';

import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from 'store/users/actions';
import { IPayloadAction } from 'store/types';

import createReducer from 'utils/createReducer';

import { TUserRecordOf } from './types';

const initialStateData = {
  fetching: false,
  data: null,
  error: null,
};

const initialState: TUserRecordOf = fromJS({
  signIn: initialStateData,
});

const setSignInFetching = (value: boolean) =>
  (state: TUserRecordOf): TUserRecordOf => state.setIn(['signIn', 'fetching'], value);

const setSignInData = (state: TUserRecordOf, action: IPayloadAction): TUserRecordOf =>
  state.setIn(['signIn', 'data'], action.payload);

const setSignInFailure = (state: TUserRecordOf, action: IPayloadAction): TUserRecordOf =>
  state.setIn(['signIn', 'error'], action.payload);


export default createReducer<TUserRecordOf>(initialState, {
  [SIGN_IN_REQUEST]: setSignInFetching(true),
  [SIGN_IN_SUCCESS]: [setSignInFetching(false), setSignInData],
  [SIGN_IN_FAILURE]: [setSignInFetching(false), setSignInFailure],
});
