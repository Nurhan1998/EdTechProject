import { all, fork } from 'redux-saga/effects';

import users from './users/effects';
import forms from './form/effects';
import notifications from './notification/effects';

function* rootSaga(): Generator {
  yield all([
    fork(users),
    fork(forms),
    fork(notifications)
  ]);
}

export default rootSaga;
