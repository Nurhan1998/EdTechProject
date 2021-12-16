import { Fragment, memo } from 'react';
import { useSelector } from 'react-redux';

import { EFieldType, IConfig } from 'components/Form/types';
import Input from 'components/Input';

import { TFieldValue } from 'store/form/types';
import { makeSelectFormFieldError } from 'store/form/selectors';

export interface IFieldProps {
  form: string;
  field: IConfig;
  onChange: (e: TFieldValue) => void;
  value: TFieldValue;
  disabled?: boolean;
}

const Field = (props: IFieldProps): JSX.Element => {
  const { form, field, onChange, value, disabled } = props;
  const {
    name,
    type,
    inputType,
    label,
    placeholder,
    disabled: fieldDisabled,
    className,
  } = field;
  const error = useSelector(makeSelectFormFieldError(form, name));


  switch (type) {
  case EFieldType.TEXT:
    return (
      <Input
        inputProps={{
          type: inputType,
          placeholder: placeholder,
          onChange: e => onChange(e.target.value),
          value: value || '',
          disabled: disabled || fieldDisabled,
          className: className
        }}
        error={error}
        label={label}
      />
    );
  default:
    return <Fragment/>;
  }
};

export default memo(Field);
