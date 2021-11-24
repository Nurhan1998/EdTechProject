import { fork, all } from 'redux-saga/effects';

import users from './user/effects';

function* rootSaga (): Generator {
  yield all([
    fork(users),
  ]);
}

export default rootSaga;
