import { ParsedUrlQuery } from 'querystring';

import Router, { useRouter } from 'next/router';

export const getQuery = (): ParsedUrlQuery  => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return router.query;
};

export const setQuery = (values: Record<string, string>): void => {
  Router.replace({
    query: values,
  });
};
