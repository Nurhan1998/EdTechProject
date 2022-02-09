import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import request from 'api/index';

import { GET_CALENDAR_REQUEST, getCalendarFailure, getCalendarSuccess } from 'store/calendar/actions';
import { TCalendarResponse } from 'store/calendar/types';


function* GetUpcomingCourses(): Generator {
  try {
    const response = yield call(
      request.get,
      '/course/'
    );
    const { data } = response as TCalendarResponse;
    yield put(getCalendarSuccess(data));

  } catch (e) {
    yield put(getCalendarFailure(e as AxiosError));
  }
}

function* Saga(): Generator {
  yield all([
    takeLatest(GET_CALENDAR_REQUEST, GetUpcomingCourses),
  ]);
}
export default Saga;
