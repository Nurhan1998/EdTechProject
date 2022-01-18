import { IConfig, EFieldType } from 'components/Form/types';

import { IFormItem } from 'store/form/types';

import safeGet from 'utils/safeGet';


const normalizeFormFields = (
  config: Array<IConfig>,
  initialValues?: Record<string, string | string[]>
): Record<string, IFormItem> => config.reduce(
  (memo, curr) => {
    // On 30 line we create new object so no need to recreate object just mutate
    // Avoid O(n2) loops in reduce body
    const value = safeGet(initialValues, curr.name, '');
    return {
      ...memo,
      [curr.name] : {
        value: curr.type === EFieldType.SELECT
          ? (
            Array.isArray(value)
              ? value
              : Boolean(value) ? [value] : []
          )
          : value,
        isTouched: false
      }
    };
  },
  {} as Record<string, IFormItem>
);

export default normalizeFormFields;
