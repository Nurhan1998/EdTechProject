import { all, fork } from 'redux-saga/effects';

import users from './users/effects';
import forms from './form/effects';

function* rootSaga(): Generator {
  yield all([
    fork(users),
    fork(forms),
  ]);
}

export default rootSaga;
