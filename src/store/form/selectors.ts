import { createSelector } from 'reselect';

import { IApplicationState } from 'store/types';
import { TFormState, TSelectorReturnType, TFormValues } from 'store/form/types';

const selectState = (state: IApplicationState): TFormState | undefined => state.form;

export const selectFormValues = (path: string): TSelectorReturnType<TFormValues> =>
  createSelector(selectState, (state?: TFormState) =>
    state?.getIn([path, 'values'])?.toJS() || {}
  );
