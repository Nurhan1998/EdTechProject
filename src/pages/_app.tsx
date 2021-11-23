import { NextPage } from 'next';
import { AppPropsType } from 'next/dist/shared/lib/utils';

import { wrapper } from 'store/index';

import 'assets/scss/vendor/normalize.scss';
import 'assets/scss/index.scss';

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */
const App: NextPage<AppPropsType> = props => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
