import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import request from 'api/index';

import { THardSkillsResponse, TSoftSkillsResponse } from 'store/skills/types';
import {
  GET_HARD_SKILLS_REQUEST,
  GET_SOFT_SKILLS_REQUEST,
  getHardSkillsFailure,
  getHardSkillsSuccess,
  getSoftSkillsFailure,
  getSoftSkillsSuccess
} from 'store/skills/actions';

function* getSoftSkills(): Generator {
  try {
    const response = yield call(
      request.get,
      '/skill/',
    );
    const { data } = response as TSoftSkillsResponse;
    yield put(getSoftSkillsSuccess(data));
  } catch (error) {
    yield put(getSoftSkillsFailure(error as AxiosError));
  }
}

function* getHardSkills(): Generator {
  try {
    const response = yield call(
      request.get,
      '/hskill/',
    );
    const { data } = response as THardSkillsResponse;
    yield put(getHardSkillsSuccess(data));
  } catch (error) {
    yield put(getHardSkillsFailure(error as AxiosError));
  }
}

function* Saga(): Generator {
  yield all([
    takeLatest(GET_SOFT_SKILLS_REQUEST, getSoftSkills),
    takeLatest(GET_HARD_SKILLS_REQUEST, getHardSkills)
  ]);
}

export default Saga;
