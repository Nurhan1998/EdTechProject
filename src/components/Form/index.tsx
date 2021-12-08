import { FormEvent, FormEventHandler, memo, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { EFormOrientation, IConfig, IFormProps } from 'components/Form/types';

import { selectFormValues } from 'store/form/selectors';
import { setFormValue } from 'store/form/actions';
import { TFieldValue } from 'store/form/types';

import Field from './Field';


const Form = (props: IFormProps): JSX.Element => {
  const {
    name,
    loading,
    errors,
    config,
    orientation = EFormOrientation.VERTICAL,
    className,
  } = props;
  const dispatch = useDispatch();
  const formValues = useSelector(selectFormValues(name));

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
        const error = errors?.[item.name];
        return (
          <Field
            error={!!error}
            errorMessage={error}
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
