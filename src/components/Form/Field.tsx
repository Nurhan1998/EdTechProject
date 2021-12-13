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
    type,
    inputType,
    label,
    placeholder,
    disabled: fieldDisabled,
    className,
    name,
  } = field;

  const error: string | string[] | undefined = useSelector(makeSelectFormFieldError(form, name));

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
