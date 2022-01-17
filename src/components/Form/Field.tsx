import { Fragment, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EFieldType, IConfig } from 'components/Form/types';
import Input from 'components/Input';
import Select from 'components/Select';

import { TFieldValue } from 'store/form/types';
import { makeSelectFormFieldError,  makeSelectFormTouchedField } from 'store/form/selectors';
import { setFormTouched } from 'store/form/actions';

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
  const dispatch = useDispatch();
  const error = useSelector(makeSelectFormFieldError(form, name));
  const touched = useSelector(makeSelectFormTouchedField(form, name));
  const options = [{ value: 'test', label: 'test' }];

  const handleTouched = (): void => {
    dispatch(setFormTouched({ form, field: name, isTouched: true }));
  };

  const handleBlur = (): void => {
    dispatch(setFormTouched({ form, field: name, isTouched: false }));
  };

  switch (type) {
  case EFieldType.TEXT:
    return (
      <Input
        inputProps={{
          type: inputType,
          placeholder: placeholder,
          onChange: e => onChange(e.target.value),
          onFocus: handleTouched,
          onBlur: handleBlur,
          value: value || '',
          disabled: disabled || fieldDisabled,
          className: className
        }}
        isTouched={touched}
        error={error}
        label={label}
      />
    );
  case EFieldType.SELECT:
    return (
      <Select
        onChange={e => onChange(e)}
        label={label}
        className={className}
        options={options}
        disabled={disabled}
      />
    );
  default:
    return <Fragment/>;
  }
};

export default memo(Field);
