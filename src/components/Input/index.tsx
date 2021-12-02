import { useState } from 'react';
import cn from 'classnames';

import { TInputProps } from 'components/Input/types';

const Input = ({
  error,
  errorMessage,
  label,
  type = 'text',
  className,
  ...props
}: TInputProps): JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [fieldType, setFieldType] = useState<string>(type);

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
        {...props}
        className={cn('input-wrapper_input', className)}
        type={fieldType}
      />
      {type === 'password' && (
        <span
          className={cn('eye-password', {
            invisible: !isPasswordVisible,
            visible: isPasswordVisible,
          })}
          onClick={passwordToggleType}
        />
      )}
      {error && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Input;
