import { createSelector } from 'reselect';

import { IApplicationState } from 'store/types';
import { TFormState, TFormValues, TSelectorReturnType } from 'store/form/types';

const selectState = (state: IApplicationState): TFormState | undefined => state.form;

export const makeSelectFormValues = (form: string): TSelectorReturnType<TFormValues> =>
  createSelector(selectState, (state?: TFormState) =>
    state?.getIn([form, 'values'])?.toJS() || {}
  );

export const makeSelectFormFieldError = (
  form: string,
  field: string
): TSelectorReturnType<string[]> =>
  createSelector(selectState, (state?: TFormState) => state?.getIn([form, 'errors', field]));