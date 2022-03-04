import { all, call, put, takeLatest } from 'redux-saga/effects';
import omit from 'lodash/omit';
import { buildFormData } from 'most-ui-kit';
import { IPayloadAction } from 'most-ui-kit';

import request from 'api/index';

import { SAVE_SETTINGS_REQUEST } from 'store/settings/actions';
import { showError, showSuccess } from 'store/notification/actions';
import { getProfileRequest } from 'store/users/actions';
import { TSettingsRequestPayload } from 'store/settings/types';

import removeArraysFromObject from 'utils/removeArraysFromObject';


function* saveSettings(action: IPayloadAction<TSettingsRequestPayload>): Generator {
  const data = buildFormData(
    removeArraysFromObject(
      !action.payload.password
        ? omit(action.payload, 'password')
        : action.payload,
    ) as Record<string, string | File | undefined>
  );

  try {
    yield call(request.put, '/user/1', data);
    yield put(getProfileRequest());
    yield put(showSuccess({ message: 'Настройки успешно изменены' }));
  } catch (e) {
    yield put(showError({ message: 'Не удалось завершить оперцию' }));
  }
}

function* Saga(): Generator {
  yield all([
    takeLatest(SAVE_SETTINGS_REQUEST, saveSettings),
  ]);
}
export default Saga;
