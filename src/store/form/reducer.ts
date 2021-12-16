import { fromJS } from 'immutable';

import { IConfig } from 'components/Form/types';

import {
  CLEAR_FORM,
  INIT_FORM,
  REMOVE_FORM,
  SET_FORM_ERROR,
  SET_FORM_INITIAL_VALUES,
  SET_FORM_VALUE
} from 'store/form/actions';

import createReducer from 'utils/createReducer';
import normalizeFormFields from 'utils/normalizeFormFields';

import {
  IFormPayload,
  IInitFormAction,
  ISetFieldErrorAction,
  ISetFieldValueAction,
  ISetInitValuesFormAction,
  TFormState,
  TFormStateHandler,
} from './types';

const initialState: TFormState = fromJS({});

const initForm: TFormStateHandler<IInitFormAction> = (state, action) => {
  const { form, config } = action.payload;
  if (state.has(form)) return state;
  return state.set(form, fromJS({
    _META: { config },
    values: normalizeFormFields(config),
    errors: null,
  }));
};

const setFieldValue: TFormStateHandler<ISetFieldValueAction> = (state, action) => {
  const { form, field, value } = action.payload;
  if (!state.has(form)) return state;
  return state.setIn([form, 'values', field], value);
};

const clearForm: TFormStateHandler<IFormPayload> = (state, action) => {
  const { form } = action.payload;
  if (!state.has(form)) return state;
  const config: Array<IConfig> = state.getIn([form, '_META', 'config']).toJS();
  return state.set(form, fromJS({ _META: { config }, values: normalizeFormFields(config) }));
};

const removeForm: TFormStateHandler<IFormPayload> = (state, action) => {
  const { form } = action.payload;
  if (!state.has(form)) return state;
  return state.remove(form);
};

const setFormInitialValues: TFormStateHandler<ISetInitValuesFormAction> = (state, action) => {
  const { form, instance } = action.payload;
  if (!state.has(form)) return state;
  return state.updateIn(
    [form, 'values'],
    prevState => ({
      ...prevState,
      ...instance,
    })
  );
};

const setFieldError: TFormStateHandler<ISetFieldErrorAction> = (state, action) => {
  const { form, error } = action.payload;
  if (!state.has(form)) return state;
  return state.setIn([form, 'errors'], error);
};


export default createReducer<TFormState>(initialState, {
  [INIT_FORM]: initForm,
  [SET_FORM_VALUE]: setFieldValue,
  [CLEAR_FORM]: clearForm,
  [REMOVE_FORM]: removeForm,
  [SET_FORM_INITIAL_VALUES]: setFormInitialValues,
  [SET_FORM_ERROR]: setFieldError,
});
