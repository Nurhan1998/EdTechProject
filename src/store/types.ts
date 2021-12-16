import { Store } from 'redux';
import { Task } from 'redux-saga';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { TFormState } from 'store/form/types';
import { TRecordOfUser } from 'store/users/types';

export interface IApplicationState {
  users?: TRecordOfUser;
  form?: TFormState;
}

export interface IWithSagaTaskStore extends Store<IApplicationState> {
  sagaTask?: Task;
  initialState?: IApplicationState;
}

export declare type IPayloadAction<P = void, T extends string = string, M = never, E = never> = {
  payload: P;
  type: T;
} & ([M] extends [never]
  ? Record<string, unknown>
  : {
    meta: M;
  }) &
  ([E] extends [never]
    ? Record<string, unknown>
    : {
      error: E;
    });

export declare type THandler<T, S = void> = (state: T, action: IPayloadAction<S>) => T;
export declare type THandlers<T, S = void> = {
  [action: string]: THandler<T, S> | THandler<T, S>[];
};

export type ResponseGenericType<T, E = Record<string, unknown>> = {
  fetching: boolean;
  data: T | null;
  error: AxiosError<E> | null;
};

export type TResponseType<T> = {
  code: number;
  data: T;
  success: boolean
}

export type TRequestWithDataFunction<D = unknown, R = AxiosResponse> = (
  url: string,
  data?: D,
  options?: AxiosRequestConfig<D>
) => Promise<R>;

export type TRequestFunction<R = AxiosResponse> = (
  url: string,
  options?: AxiosRequestConfig
) => Promise<R>;
