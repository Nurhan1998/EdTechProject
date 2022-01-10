import { all, fork } from 'redux-saga/effects';

import users from './users/effects';
import forms from './form/effects';
import calendar from './calendar/effects';
import notifications from './notification/effects';
import skills from './skills/effects';

function* rootSaga(): Generator {
  yield all([
    fork(users),
    fork(forms),
    fork(calendar),
    fork(notifications),
    fork(skills)
  ]);
}

export default rootSaga;
