import { useState } from 'react';
import cn from 'classnames';

import { IInputProps } from 'components/Input/types';

const Input = ({
  error,
  label,
  inputProps
}: IInputProps): JSX.Element => {
  const { className, type, value } = inputProps;
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
      <p className="input-wrapper_label">{label}</p>
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
      {(error && value) && error.map((item, idx) => (
        <p className="error" key={idx}>{item}</p>
      ))}
    </div>
  );
};

export default Input;
