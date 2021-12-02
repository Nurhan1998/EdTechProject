import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import request from 'api/index';

import { SIGN_IN_REQUEST, signInFailure, signInSuccess, } from 'store/users/actions';
import { TSignInResponse, TSignUpModel } from 'store/users/types';
import { IPayloadAction } from 'store/types';

import buildFormData from 'utils/formData';
import { EStorageKeys, setStorageData } from 'utils/storageHelpers';


function* SingIn (action: IPayloadAction<TSignUpModel>): Generator {
  const form = buildFormData(action.payload);
  try {
    const response = yield call(
      request.post,
      '/user/login/',
      form,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    const { data: signInResponse } = response as TSignInResponse;

    yield setStorageData(EStorageKeys.TOKEN, JSON.stringify(signInResponse.data.token));
    yield put(signInSuccess(signInResponse.data));
  } catch (error) {
    yield put(signInFailure(error as AxiosError));

  }
}


function* Saga (): Generator {
  yield all([
    takeLatest(SIGN_IN_REQUEST, SingIn),
  ]);
}

export default Saga;
