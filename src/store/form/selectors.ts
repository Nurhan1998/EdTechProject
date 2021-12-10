import { createSelector } from 'reselect';

import { IApplicationState } from 'store/types';
import { TFormState, TFormValues, TSelectorReturnType } from 'store/form/types';

const selectState = (state: IApplicationState): TFormState | undefined => state.form;

export const makeSelectFormValues = (path: string): TSelectorReturnType<TFormValues> =>
  createSelector(selectState, (state?: TFormState) =>
    state?.getIn([path, 'values'])?.toJS() || {}
  );

export const makeSelectFormError = (form: string): TSelectorReturnType<Record<string, string | string[]>> =>
  createSelector(selectState, (state?: TFormState) => state?.getIn([form, 'errors'])?.toJS() || {});

