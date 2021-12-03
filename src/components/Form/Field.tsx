import { Fragment, memo } from 'react';

import { IConfig, EFieldType } from 'components/Form/types';
import Input from 'components/Input';

import { TFieldValue } from 'store/form/types';

export interface IFieldProps {
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
  case EFieldType.TEXT: return (
    <Input
      type={inputType}
      label={label}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      value={value || ''}
      disabled={disabled || fieldDisabled}
      className={className}
    />
  );
  default: return <Fragment />;
  }
};

export default memo(Field);
