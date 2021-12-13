import { useState } from 'react';
import cn from 'classnames';

import { IMostInputProps } from 'components/Input/types';

const Input = ({
  error,
  label,
  inputProps,
}: IMostInputProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { type, className } = inputProps;
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [fieldType, setFieldType] = useState<string>(type || 'text');

  const passwordToggleType = () => {
    setIsPasswordVisible(!isPasswordVisible);
    if (fieldType === 'text') {
      setFieldType('password');
    } else {
      setFieldType('text');
    }
  };

  return (
    <div className="input-wrapper">
      <p className="input-wrapper_label"> {label}</p>
      {type === 'search' ? (<div>test</div>) : (
        <input
          {...inputProps}
          className={cn('input-wrapper_input', className)}
          type={fieldType}
        />)}
      {type === 'password' && (
        <span
          className={cn('eye-password', {
            invisible: !isPasswordVisible,
            visible: isPasswordVisible,
            dirty: !!error,
            clean: !error,
          })}
          onClick={passwordToggleType}
        />
      )}
      {error && <p className="error">{Array.isArray(error) ? error[0] : error}</p>}
    </div>
  );
};

export default Input;
