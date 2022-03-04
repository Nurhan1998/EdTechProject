import { safeGet } from 'most-ui-kit';

import { IConfig, EFieldType } from 'components/Form/types';

import { IFormItem } from 'store/form/types';


const normalizeFormFields = (
  config: Array<IConfig>,
  initialValues?: Record<string, string | string[]>
): Record<string, IFormItem> => config.reduce(
  (memo, curr) => {
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
