import { all, takeEvery, call } from 'redux-saga/effects';
import { IPayloadAction } from 'most-ui-kit';

import { INotificationAction } from 'store/notification/types';

import createNotification from 'utils/createNotification';

import { NOTIFICATION_SUCCESS, NOTIFICATION_ERROR } from './actions';

function* openSuccess(action: IPayloadAction<INotificationAction>): Generator {
  yield call(createNotification, {
    type: 'success',
    message: action.payload.message
  });
}

function* openError(action: IPayloadAction<INotificationAction>) {
  yield call(createNotification, {
    type: 'danger',
    message: action.payload.message
  });

}

function* Saga(): Generator {
  yield all([
    takeEvery(NOTIFICATION_SUCCESS, openSuccess),
    takeEvery(NOTIFICATION_ERROR, openError),
  ]);
}

export default Saga;
