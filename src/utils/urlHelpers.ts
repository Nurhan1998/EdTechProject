import Router from 'next/router';

export const setQuery = (values: Record<string, string>): void => {
  Router.replace({
    query: values,
  });
};
