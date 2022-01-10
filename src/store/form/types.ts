import { RecordOf } from 'immutable';
import { ObjectShape } from 'yup/lib/object';

import { IConfig } from 'components/Form/types';

import { THandler, TSelectorReturnType } from 'store/types';


export type TFieldValue<T = string> = T | Array<T>;
export type TFormValues = Record<string, TFieldValue>;

export interface IFormMeta {
  config: Array<IConfig>;
  title?: string;
  subTitle?: string;
}

export interface IFormState {
  _META: IFormMeta;
  values: TFormValues;
}

export interface IFormPayload {
  form: string;
}

export interface IInitFormAction extends IFormPayload {
  config: Array<IConfig>;
}

export interface ISetFieldValueAction extends IFormPayload {
  field: string;
  value: TFieldValue;
  validateSchema?: ObjectShape;
}

export interface ISetFieldErrorAction extends IFormPayload {
  error: Record<string, string[]>;
}

export interface ISetInitValuesFormAction extends IFormPayload {
  instance: Record<string, TFieldValue>;
}

export type TFormSelectorReturnType<T> = TSelectorReturnType<T, TFormState>;
export type TRecordOfFormState = RecordOf<IFormState>;
export type TFormState = RecordOf<Record<string, TRecordOfFormState>>;
export type TFormStateHandler<T> = THandler<TFormState, T>;
