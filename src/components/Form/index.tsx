import { FormEvent, FormEventHandler, memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import cn from 'classnames';

import { EFormOrientation, IConfig, IFormProps } from 'components/Form/types';

import { makeSelectFormValues } from 'store/form/selectors';
import { setFormError, setFormValue } from 'store/form/actions';
import { TFieldValue } from 'store/form/types';

import Field from './Field';


const Form = (props: IFormProps): JSX.Element => {
  const {
    name,
    loading,
    config,
    orientation = EFormOrientation.VERTICAL,
    className,
    validateFn,
  } = props;
  const dispatch = useDispatch();
  const formValues = useSelector(makeSelectFormValues(name));

  const handleSubmit = (e: FormEventHandler<HTMLFormElement> & FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleFieldChange = (field: string) => (value: TFieldValue): void => {
    dispatch(setFormValue({
      form: name,
      field,
      value: value
    }));
  };

  const fields = useMemo<Array<IConfig>>(
    () => config.filter(item => {
      if (typeof item.showIf === 'function') return item.showIf(formValues);
      return true;
    }),
    [config, formValues],
  );

  useEffect(
    () => {
      if (validateFn && !isEmpty(formValues)) {
        const error = validateFn(formValues);
        dispatch(setFormError({
          form: name,
          error,
        }));
      }
    },
    // there should be 'formValues' in deps
    // We should re-validate only when formValues changes
    // eslint-disable-next-line
    [],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('most-form', orientation.toString(), className)}
    >
      {fields.map((item, idx) => {
        const key = `FORM_${name}_${item.name}_FIELD_${idx}`;
        const value = formValues[item.name];
        const disabled = typeof item.disabledIf === 'function'
          ? item.disabledIf(formValues)
          : false;
        return (
          <Field
            form={name}
            key={key}
            field={item}
            onChange={handleFieldChange(item.name)}
            value={value}
            disabled={loading || disabled}
          />
        );
      })}
    </form>
  );
};


export default memo(Form);
