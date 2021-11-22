import { Store } from 'redux';
import { Task } from 'redux-saga';

import { TUserStoreRecord } from './user/types';

export interface IApplicationState {
    users?: TUserStoreRecord
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
