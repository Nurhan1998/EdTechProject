import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';
import Router from 'next/router';

import request from 'api/index';

import { HOME_PAGE } from 'configuration/urls';
import { DEFAULT_PAGE_SIZE } from 'configuration/constants';

import {
  FORGOT_PASSWORD_REQUEST,
  forgotPasswordFailure,
  forgotPasswordSuccess,
  GET_PROFILE_REQUEST,
  GET_USERS_BY_SEARCH_REQUEST,
  GET_USERS_LIST_REQUEST,
  getProfileFailure,
  getProfileSuccess,
  getUsersBySearchFailure,
  getUsersBySearchSuccess,
  getUsersListFailure,
  getUsersListSuccess,
  setUsersCount,
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  signInFailure,
  signInSuccess,
  signUpFailure,
  signUpSuccess,
} from 'store/users/actions';
import {
  IForgotPassword, IPagination,
  TSignIn,
  TSignInResponse,
  TSignUp,
  TSignUpResponse,
  TUserListResponse,
} from 'store/users/types';
import { IPayloadAction } from 'store/types';

import buildFormData from 'utils/formData';
import { EStorageKeys, setStorageData } from 'utils/storageHelpers';


function* SingIn(action: IPayloadAction<TSignIn>): Generator {
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
    console.error(error);
    yield put(signInFailure(error as AxiosError));
  }
}

function* SignUp(action: IPayloadAction<TSignUp>): Generator {
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

function* ForgotPassword(action: IPayloadAction<IForgotPassword>): Generator {
  const { email } = action.payload;
  try {
    const response = yield call(
      request.post,
      '/user/forgot/',
      { email }
    );
    const { data } = response as AxiosResponse<boolean>;
    yield put(forgotPasswordSuccess(data));
  } catch (e) {
    yield put(forgotPasswordFailure(e as AxiosError));
  }
}

function* GetUsers(action: IPayloadAction<IPagination>): Generator {
  const { page } = action.payload;
  const params = {
    onpage: DEFAULT_PAGE_SIZE,
    start: page === 1 ? page : (page * DEFAULT_PAGE_SIZE)
  };

  try {
    const response = yield call(
      request.get,
      '/user/',
      { params }
    );
    const { data, total } = response as TUserListResponse ;
    yield put(getUsersListSuccess(data));
    yield put(setUsersCount({ total }));
  } catch (error) {
    yield put(getUsersListFailure(error as AxiosError));
  }
}

function* GetUsersBySearch(action: IPayloadAction<IPagination & { name: string }>): Generator {
  const { name, page } = action.payload;
  const params = {
    name,
    onpage: DEFAULT_PAGE_SIZE,
    start: page === 1 ? page : (page * DEFAULT_PAGE_SIZE)
  };

  try {
    const response = yield call(
      request.get,
      '/user/search',
      { params }
    );

    const { data, total } = response as TUserListResponse;
    yield put(getUsersBySearchSuccess(data));
    yield put(setUsersCount({ total }));
  } catch (e) {
    yield put(getUsersBySearchFailure(e as AxiosError));
  }

}

function* Saga(): Generator {
  yield all([
    takeLatest(SIGN_IN_REQUEST, SingIn),
    takeLatest(GET_PROFILE_REQUEST, GetProfile),
    takeLatest(SIGN_UP_REQUEST, SignUp),
    takeLatest(FORGOT_PASSWORD_REQUEST, ForgotPassword),
    takeLatest(GET_USERS_LIST_REQUEST, GetUsers),
    takeLatest(GET_USERS_BY_SEARCH_REQUEST, GetUsersBySearch)
  ]);
}

export default Saga;
