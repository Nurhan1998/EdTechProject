import { combineReducers } from 'redux';

import { IApplicationState } from './types';
import users from './users/reducer';


const rootReducer = combineReducers<IApplicationState>({
  users
});

export default rootReducer;
