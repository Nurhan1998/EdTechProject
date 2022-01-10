import { createSelector } from 'reselect';
import { AxiosError } from 'axios';

import { IApplicationState } from 'store/types';
import {
  IUsersListResponseData,
  TRecordOfUser,
  TUserSelectorReturnType,
  TSignInResponseData,
  IProfileModel
} from 'store/users/types';


const selectState = (state: IApplicationState): TRecordOfUser | undefined => state.users;

export const makeSelectSignInFetching: TUserSelectorReturnType<boolean> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['signIn', 'fetching']) || false
);
export const makeSelectSignInError: TUserSelectorReturnType<AxiosError | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['signIn', 'error']) || null
);
export const makeSelectSignInData: TUserSelectorReturnType<TSignInResponseData | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['signIn', 'data'])?.toJS() || null,
);

export const makeSelectSignUpFetching: TUserSelectorReturnType<boolean> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['signUp', 'fetching']) || false
);
export const makeSelectSignUpError: TUserSelectorReturnType<AxiosError | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['signUp', 'error']) || null
);
export const makeSelectSignUpData: TUserSelectorReturnType<TSignInResponseData | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['signUp', 'data'])?.toJS() || null,
);

export const makeSelectForgotPasswordFetching: TUserSelectorReturnType<boolean> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['forgotPassword', 'fetching']) || false
);
export const makeSelectForgotPasswordError: TUserSelectorReturnType<AxiosError | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['forgotPassword', 'error']) || null
);
export const makeSelectForgotPasswordData: TUserSelectorReturnType<TSignInResponseData | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['forgotPassword', 'data'])?.toJS() || null,
);

export const makeSelectUsersListFetching: TUserSelectorReturnType<boolean> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['usersList', 'fetching']) || false
);
export const makeSelectUsersListError: TUserSelectorReturnType<AxiosError | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['usersList', 'error']) || null
);
export const makeSelectUsersListData: TUserSelectorReturnType<IUsersListResponseData[] | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['usersList', 'data'])?.toJS() || null,
);

export const makeSelectProfileFetching: TUserSelectorReturnType<boolean> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['profile', 'fetching']) || false
);
export const makeSelectProfileData: TUserSelectorReturnType<IProfileModel | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['profile', 'data'])?.toJS() || null
);
export const makeSelectProfileError: TUserSelectorReturnType<AxiosError | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.getIn(['profile', 'error']) || null
);

export const makeSelectToken: TUserSelectorReturnType<string | null> = createSelector(
  selectState,
  (state?: TRecordOfUser) => state?.get('token') || null,
);
