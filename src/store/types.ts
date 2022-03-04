import { Store } from 'redux';
import { Task } from 'redux-saga';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { GetParamsFromSelectors, OutputSelector, SelectorResultArray } from 'reselect';

import { TFormState } from 'store/form/types';
import { TRecordOfUser } from 'store/users/types';
import { TRecordOfCalendar } from 'store/calendar/types';
import { TSkillsRecordOf } from 'store/skills/types';

export interface IApplicationState {
  users?: TRecordOfUser;
  form?: TFormState;
  calendar?: TRecordOfCalendar;
  skills?: TSkillsRecordOf
}

export interface IWithSagaTaskStore extends Store<IApplicationState> {
  sagaTask?: Task;
  initialState?: IApplicationState;
}


export type ResponseGenericType<T, E = Record<string, unknown>> = {
  fetching: boolean;
  data: T | null;
  error: AxiosError<E> | null;
};

export type TResponseType<T> = {
  code: number;
  data: T;
  success: boolean,
  total: number
}

export type AxiosResponseWithTotal<T = unknown> = AxiosResponse<T> & { total: number }

export type TRequestWithDataFunction<D = unknown, R = AxiosResponse> = (
  url: string,
  data?: D,
  options?: AxiosRequestConfig<D>
) => Promise<R>;

export type TRequestFunction<R = AxiosResponse> = (
  url: string,
  options?: AxiosRequestConfig
) => Promise<R>;

export type TSelectorReturnType<T, D> = OutputSelector<
  [((state: IApplicationState) => D)],
  T,
  (...args: SelectorResultArray<[((state: IApplicationState) => D)]>) => T,
  GetParamsFromSelectors<[((state: IApplicationState) => D)]>
>;

