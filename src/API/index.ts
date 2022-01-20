import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import assign from 'lodash/assign';
import Router from 'next/router';

import { HOME_PAGE, SIGN_IN } from 'configuration/urls';

import { TResponseType } from 'store/types';

import { getStorageData, EStorageKeys, clearStorageData } from 'utils/storageHelpers';


const mainURL = process.env.MAIN_URL;
const instance = axios.create({ baseURL: mainURL });

instance.interceptors.request.use(
  config => {
    const token = getStorageData(EStorageKeys.TOKEN);
    return assign<AxiosRequestConfig, Partial<AxiosRequestConfig>>(config, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: token ? { ...config.params, hash: token } : config.params,
    });
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse<TResponseType<unknown>>) => {
    const { data, success, code, total } = response.data;
    if (!success) {
      if(code === 401){
        clearStorageData().then(() => Router.push(SIGN_IN));
      }
      throw {
        code: code.toString(),
        config: response.config,
        isAxiosError: false,
        toJSON: () => ({}),
        name: 'response_failed',
        message: 'Failed response from the remote server',
        response: response,
      } as AxiosError;
    }
    return assign<AxiosResponse, Partial<AxiosResponse & { total: number }>>(response, { data, total });
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response?.status === 401) {
      Router.push(HOME_PAGE);
    }
    return Promise.reject(error);
  },
);

export default instance;
