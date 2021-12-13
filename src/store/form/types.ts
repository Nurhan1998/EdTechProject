import { RecordOf } from 'immutable';
import { GetParamsFromSelectors, OutputSelector, SelectorResultArray } from 'reselect';

import { IConfig } from 'components/Form/types';

import { IApplicationState, THandler } from 'store/types';


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
}

export interface ISetFieldErrorAction extends IFormPayload {
  error: Record<string, string | string[]>;
}

export interface ISetInitValuesFormAction extends IFormPayload {
  instance: Record<string, TFieldValue>;
}

export type TSelectorReturnType<T> = OutputSelector<[((state: IApplicationState) => TFormState)],
  T,
  (...args: SelectorResultArray<[((state: IApplicationState) => TFormState)]>) => T,
  GetParamsFromSelectors<[((state: IApplicationState) => TFormState)]>>;

export type TRecordOfFormState = RecordOf<IFormState>;
export type TFormState = RecordOf<Record<string, TRecordOfFormState>>;
export type TFormStateHandler<T> = THandler<TFormState, T>;
