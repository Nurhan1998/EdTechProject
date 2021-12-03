import { createSelector } from 'reselect';
import { AxiosError } from 'axios';

import { IApplicationState } from 'store/types';
import { TRecordOfUser, TSelectorReturnType, TSignInResponseData } from 'store/users/types';


const selectState = (state: IApplicationState): TRecordOfUser | undefined => state.users;

export const makeSelectSignInFetching: TSelectorReturnType<boolean> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['signIn', 'fetching']) || false
);
export const makeSelectSignInError: TSelectorReturnType<AxiosError | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['signIn', 'error']) || null
);
export const makeSelectSignInData: TSelectorReturnType<TSignInResponseData | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['signIn', 'data'])?.toJS() || null,
);

export const makeSelectToken: TSelectorReturnType<string | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.get('token') || null,
);
