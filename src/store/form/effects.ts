import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { ValidationError } from 'yup';

import { IPayloadAction } from 'store/types';

import { executeValidation } from 'utils/validation';
import { getValidationErrors } from 'utils/getValidationErrors';

import { SET_FORM_VALUE, setFormError } from './actions';
import { ISetFieldValueAction, TFormValues } from './types';
import { makeSelectFormValues } from './selectors';


function* validateFormFields(action: IPayloadAction<ISetFieldValueAction>): Generator {
  const { validateSchema, form } = action.payload;
  if (!validateSchema) return;
  const values = yield select(makeSelectFormValues(form));

  try {
    const validationResult = yield call(executeValidation, validateSchema, values as TFormValues);
    const error = getValidationErrors(validationResult as ValidationError);
    yield put(setFormError({ form, error }));
  } catch (error) {
    // validation passes without errors
    // so just doing nothing here.
  }
}

function* Saga(): Generator {
  yield all([
    takeLatest(SET_FORM_VALUE, validateFormFields),
  ]);
}

export default Saga;
