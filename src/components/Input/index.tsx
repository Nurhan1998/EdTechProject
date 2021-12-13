import { useState } from 'react';
import cn from 'classnames';

import { IInputProps } from 'components/Input/types';

const Input = ({
  error,
  label,
  inputProps
}: IInputProps): JSX.Element => {
  const { className, type } = inputProps;
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
      <input
        {...inputProps}
        className={cn('input-wrapper_input', className)}
        type={fieldType}
      />
      {type === 'password' && (
        <span
          className={cn('eye-password', {
            invisible: !isPasswordVisible,
            visible: isPasswordVisible,
            dirty: error,
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
