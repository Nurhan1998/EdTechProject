import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AppPropsType } from 'next/dist/shared/lib/utils';
import { useSelector, useDispatch } from 'react-redux';

import { SIGN_IN, HOME_PAGE } from 'configuration/urls';

import { wrapper } from 'store/index';
import { makeSelectToken } from 'store/users/selectors';
import { getProfileRequest } from 'store/users/actions';

import 'assets/scss/vendor/normalize.scss';
import 'assets/scss/index.scss';


/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */
const App: NextPage<AppPropsType> = props => {
  const { Component, pageProps } = props;
  const token = useSelector(makeSelectToken);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (token) {
        if (router.pathname === SIGN_IN) {
          router.push(HOME_PAGE);
        }
        dispatch(getProfileRequest());
      } else {
        router.push(SIGN_IN);
      }
    },
    // Need to call this effect only once at render
    // eslint-disable-next-line
    [],
  );

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
