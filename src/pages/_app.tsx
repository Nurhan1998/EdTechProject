import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AppPropsType } from 'next/dist/shared/lib/utils';
import { useDispatch, useSelector } from 'react-redux';
import ReactNotification from 'react-notifications-component';

import { HOME_PAGE, SIGN_IN } from 'configuration/urls';

import { wrapper } from 'store/index';
import { makeSelectToken } from 'store/users/selectors';
import { getProfileRequest } from 'store/users/actions';

import '@fullcalendar/common/main.css';
import 'react-notifications-component/dist/theme.css';
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

  return (
    <>
      <Component {...pageProps}/>
      <ReactNotification/>
    </>
  );

};

export default wrapper.withRedux(App);
