import { createSelector } from 'reselect';
import { safeGet } from 'most-ui-kit';

import { IApplicationState } from 'store/types';
import { TFormattedFormValues, TFormSelectorReturnType, TFormState, TFormValues } from 'store/form/types';



const selectState = (state: IApplicationState): TFormState | undefined => state.form;

export const makeSelectFormValues = (form: string): TFormSelectorReturnType<TFormattedFormValues> =>
  createSelector(
    selectState,
    (state?: TFormState) => {
      const values: TFormValues = state?.getIn([form, 'values'])?.toJS() || {};
      return Object.keys(values).reduce(
        (memo: TFormattedFormValues, curr) => ({
          ...memo,
          [curr]: safeGet(values, `${curr}.value`, ''),
        }),
        {} as TFormattedFormValues,
      );
    }
  );

export const makeSelectFormFieldError = (
  form: string,
  field: string
): TFormSelectorReturnType<string[]> =>
  createSelector(selectState, (state?: TFormState) => state?.getIn([form, 'errors', field]));

export const makeSelectFormTouchedField = (form: string, field: string): TFormSelectorReturnType<boolean> =>
  createSelector(selectState, (state?: TFormState) =>
    state?.getIn([form, 'values', field, 'isTouched']) || false
  );
