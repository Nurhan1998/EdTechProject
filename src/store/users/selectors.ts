import { createSelector } from 'reselect';

import { IApplicationState } from 'store/types';
import { TSignInStateProps } from 'store/users/types';

const selectState = (state: IApplicationState): TSignInStateProps => state.users;

export const signInSelectFetching = createSelector(selectState, (state: TSignInStateProps) =>
  state?.getIn(['signIn', 'fetching'])
);
export const signInSelectError = createSelector(selectState, (state: TSignInStateProps) =>
  state?.getIn(['signIn', 'error'])
);
export const signInSelectData = createSelector(selectState, (state: TSignInStateProps) =>
  state?.getIn(['signIn', 'data'])
);
