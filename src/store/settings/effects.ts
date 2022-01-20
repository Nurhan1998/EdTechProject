import { all, call, put, takeLatest } from 'redux-saga/effects';

import request from 'api/index';


import { SAVE_SETTINGS_REQUEST } from 'store/settings/actions';
import { showError, showSuccess } from 'store/notification/actions';
import { getProfileRequest } from 'store/users/actions';
import { IPayloadAction } from 'store/types';
import { TSettingsRequestPayload } from 'store/settings/types';

import removeArraysFromObject from 'utils/removeArraysFromObject';


function* saveSettings(action: IPayloadAction<TSettingsRequestPayload>): Generator {
  const { payload } = action;

  if (!payload.password) {
    delete payload.password;
  }

  try {
    yield call(request.put, '/user/1', removeArraysFromObject(payload));
    yield put(getProfileRequest());
    yield put(showSuccess({ message: 'Настройки успешно изменены' }));
  }catch (e) {
    yield put(showError({ message: 'Не удалось завершить оперцию' }));
  }
}

function* Saga(): Generator {
  yield all([
    takeLatest(SAVE_SETTINGS_REQUEST, saveSettings),
  ]);
}
export default Saga;
