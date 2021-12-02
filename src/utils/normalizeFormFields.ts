import { IConfig, EFieldType } from 'components/Form/types';

import { TFormValues } from 'store/form/types';

const normalizeFormFields = (config: Array<IConfig>): TFormValues => config.reduce(
  (memo, curr) => {
    // On 14 line we create new object so no need to recreate object just mutate
    // Avoid O(n2) loops in reduce body
    memo[curr.name] = curr.type === EFieldType.SELECT
      ? []
      : '';
    return memo;
  },
  {} as TFormValues
);

export default normalizeFormFields;
