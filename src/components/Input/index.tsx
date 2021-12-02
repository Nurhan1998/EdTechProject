import { FC, useState } from 'react';
import cn from 'classnames';

import { IInputProps } from 'components/Input/types';

const Input: FC<IInputProps> = ({
  onChange,
  value,
  placeholder,
  error,
  errorMessage,
  label,
  type = 'text',
  className
}) => {
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
        value={value} onChange={onChange}
        className={cn('input-wrapper_input', className)}
        placeholder={placeholder} type={fieldType}
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
