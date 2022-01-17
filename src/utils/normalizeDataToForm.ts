import { IConfig } from 'components/Form/types';

import { TFormattedFormValues } from 'store/form/types';

const normalizeDataToForm = (
  instance: Record<string, string | string[] | unknown>,
  config: IConfig[]
): TFormattedFormValues => config.reduce((memo, curr) => {
  if(instance[curr.name]) {
    return {
      [curr.name] : instance[curr.name],
      ...memo,
    };
  }
  return memo;
}, {});

export default normalizeDataToForm;
