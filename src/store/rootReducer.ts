import { combineReducers } from 'redux';

import { IApplicationState } from './types';
import users from './users/reducer';
import form from './form/reducer';
import calendar from './calendar/reducer';

const rootReducer = combineReducers<IApplicationState>({
  users,
  form,
  calendar,
});

export default rootReducer;
