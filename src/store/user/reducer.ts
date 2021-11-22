import { fromJS } from 'immutable';

import createReducer from 'utils/createReducer';

import { TUserStoreRecord } from './types';


const initialState: TUserStoreRecord = fromJS({});

export default createReducer(initialState, {});
