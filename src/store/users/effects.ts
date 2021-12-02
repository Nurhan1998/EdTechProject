import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import Router from 'next/router';

import request from 'api/index';

import { HOME_PAGE } from 'configuration/urls';

import {
  SIGN_IN_REQUEST,
  GET_PROFILE_REQUEST,
  signInFailure,
  signInSuccess,
  getProfileSuccess,
  getProfileFailure,
} from 'store/users/actions';
import { TSignInResponse, TSignUpModel } from 'store/users/types';
import { IPayloadAction } from 'store/types';

import buildFormData from 'utils/formData';
import { EStorageKeys, setStorageData } from 'utils/storageHelpers';


function* SingIn(action: IPayloadAction<TSignUpModel>): Generator {
  const form = buildFormData(action.payload);
  try {
    const response = yield call(
      request.post,
      '/user/login/',
      form,
    );
    const { data } = response as TSignInResponse;

    yield call(setStorageData, EStorageKeys.TOKEN, data.token);
    yield put(signInSuccess(data));
    yield call(Router.push, HOME_PAGE);
  } catch (error) {
    yield put(signInFailure(error as AxiosError));
  }
}

function* GetProfile(): Generator {
  try {
    const response = yield call(
      request.post,
      '/user/login/'
    );
    const { data } = response as TSignInResponse;

    yield put(getProfileSuccess(data.profile));
  } catch (error) {
    yield put(getProfileFailure(error as AxiosError));
  }
}


function* Saga(): Generator {
  yield all([
    takeLatest(SIGN_IN_REQUEST, SingIn),
    takeLatest(GET_PROFILE_REQUEST, GetProfile)
  ]);
}

export default Saga;
