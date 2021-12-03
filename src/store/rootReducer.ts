import { combineReducers } from 'redux';

import { IApplicationState } from './types';
import users from './users/reducer';
import form from './form/reducer';

const rootReducer = combineReducers<IApplicationState>({
  users,
  form
});

export default rootReducer;
