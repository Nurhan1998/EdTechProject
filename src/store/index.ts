import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose, CombinedState, Store } from 'redux';
import createSagaMiddleware from "redux-saga";
import { fromJS } from "immutable";
import assign from "lodash/assign";

import { IWithSagaTaskStore, IApplicationState, IPayloadAction } from './types';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


export const configureStore = <T extends object = never>(initialState: T): IWithSagaTaskStore => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" as keyof Window]
      ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" as keyof Window]({
        shouldHotReload: false,
      })
      : compose;

  const store: IWithSagaTaskStore = createStore<CombinedState<IApplicationState>, IPayloadAction, undefined, undefined>(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const initStore = (initialState: IApplicationState = {}): IWithSagaTaskStore =>
  configureStore<IApplicationState>(initialState);

export const wrapper = createWrapper<Store<CombinedState<IApplicationState>>>(() => initStore(), {
  serializeState: (state: IApplicationState) => Object.keys(state).reduce(
    (memo: IApplicationState, curr: string) => assign<IApplicationState, Partial<IApplicationState>>(memo, {
      [curr]: state[curr as keyof IApplicationState]?.toJS(),
    }),
    {} as Record<string, unknown>
  ),
  deserializeState: (state: Record<string, unknown>) => Object.keys(state).reduce(
    (memo: IApplicationState, curr: string) => assign<IApplicationState, Partial<IApplicationState>>(memo, {
      [curr]: fromJS(state[curr])
    }),
    {} as IApplicationState
  ),
});

export default initStore;
