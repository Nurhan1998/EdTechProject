import { all, fork } from 'redux-saga/effects';

import users from './users/effects';

function* rootSaga(): Generator {
  yield all([
    fork(users),
  ]);
}

export default rootSaga;
