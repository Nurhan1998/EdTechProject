import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import Router from 'next/router';

import request from 'api/index';

import { HOME_PAGE } from 'configuration/urls';

import {
  GET_PROFILE_REQUEST,
  getProfileFailure,
  getProfileSuccess,
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  signInFailure,
  signInSuccess,
  signUpFailure,
  signUpSuccess,
} from 'store/users/actions';
import { TSignInModel, TSignInResponse, TSignUpModel, TSignUpResponse, } from 'store/users/types';
import { IPayloadAction } from 'store/types';

import buildFormData from 'utils/formData';
import { EStorageKeys, setStorageData } from 'utils/storageHelpers';


function* SingIn(action: IPayloadAction<TSignInModel>): Generator {
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

function* SignUp(action: IPayloadAction<TSignUpModel>): Generator {
  const geo = { country: 'KG', city: 'Bishkek' };
  const dataWithGeo = Object.assign(action.payload, geo);
  const form = buildFormData(dataWithGeo);

  try {
    const response = yield call(
      request.post,
      '/user/',
      form,
    );
    const { data } = response as TSignUpResponse;
    yield call(setStorageData, EStorageKeys.TOKEN, data.token.token);
    yield put(signUpSuccess(data));
    yield call(Router.push, HOME_PAGE);
  } catch (error) {
    yield put(signUpFailure(error as AxiosError));
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
    takeLatest(GET_PROFILE_REQUEST, GetProfile),
    takeLatest(SIGN_UP_REQUEST, SignUp)
  ]);
}

export default Saga;
