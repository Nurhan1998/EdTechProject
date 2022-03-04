import { safeGet } from 'most-ui-kit';

import { IConfig } from 'components/Form/types';

import { TFormattedFormValues } from 'store/form/types';


const normalizeDataToForm = <T = TFormattedFormValues>(
  instance: T,
  config: IConfig[]
): TFormattedFormValues => config.reduce((memo, curr) => {
    const value = safeGet<T, string | string[]>(instance, curr.name, '');
    if (value) {
      return {
        ...memo,
        [curr.name]: value,
      };
    }
    return memo;
  }, {} as TFormattedFormValues);

export default normalizeDataToForm;
