import { Fragment, memo } from 'react';

import { EFieldType, IConfig } from 'components/Form/types';
import Input from 'components/Input';

import { TFieldValue } from 'store/form/types';

export interface IFieldProps {
  form: string;
  field: IConfig;
  onChange: (e: TFieldValue) => void;
  value: TFieldValue;
  disabled?: boolean;
}

const Field = (props: IFieldProps): JSX.Element => {
  const { field, onChange, value, disabled } = props;
  const {
    type,
    inputType,
    label,
    placeholder,
    disabled: fieldDisabled,
    className,
  } = field;


  switch (type) {
  case EFieldType.TEXT:
    return (
      <Input
        inputProps={{
          placeholder,
          className,
          type: inputType,
          value: value || '',
          onChange: e => onChange(e.target.value),
          disabled: disabled || fieldDisabled
        }}
        label={label}
      />
    );
  default:
    return <Fragment/>;
  }
};

export default memo(Field);
