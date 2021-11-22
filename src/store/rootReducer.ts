import { combineReducers } from "redux";

import { IApplicationState } from './types';
import users from './user/reducer';


const rootReducer = combineReducers<IApplicationState>({
  users
});

export default rootReducer;
