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

export const makeSelectSignUpFetching: TSelectorReturnType<boolean> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['signUp', 'fetching']) || false
);
export const makeSelectSignUpError: TSelectorReturnType<AxiosError | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['signUp', 'error']) || null
);
export const makeSelectSignUpData: TSelectorReturnType<TSignInResponseData | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['signUp', 'data'])?.toJS() || null,
);

export const makeSelectForgotPasswordFetching: TSelectorReturnType<boolean> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['forgotPassword', 'fetching']) || false
);
export const makeSelectForgotPasswordError: TSelectorReturnType<AxiosError | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['forgotPassword', 'error']) || null
);
export const makeSelectForgotPasswordData: TSelectorReturnType<TSignInResponseData | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['forgotPassword', 'data'])?.toJS() || null,
);


export const makeSelectToken: TSelectorReturnType<string | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.get('token') || null,
);
