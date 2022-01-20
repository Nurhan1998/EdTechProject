import { TFormattedFormValues } from 'store/form/types';

const removeArraysFromObject = (data: Record<string, string | string[]>): TFormattedFormValues  => {
  const keys = Object.keys(data);
  return keys.reduce((memo, curr) => ({
    ...memo,
    [curr]: Array.isArray(data[curr]) ? data[curr][0] : data[curr]
  }), {});
};

export default removeArraysFromObject;
