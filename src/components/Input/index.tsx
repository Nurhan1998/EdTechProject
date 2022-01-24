import { useState } from 'react';
import cn from 'classnames';

import { IInputProps } from 'components/Input/types';
import { SearchInput } from 'components/Input/components/SearchInput';

const Input = ({
  error,
  label,
  inputProps,
  isTouched,
  onButtonClick
}: IInputProps): JSX.Element => {
  const { className, type, value, placeholder, onChange, onFocus, onBlur, disabled } = inputProps;
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
    <div className={cn(className, 'input-wrapper')}>
      <p className="label">{label}</p>
      {type === 'search' ? (
        <SearchInput inputProps={inputProps} onButtonClick={onButtonClick}/>
      ) : type === 'password' ? (
        <>
          <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
            disabled={disabled}
            className="input"
          />
          <span
            className={cn('eye-password', {
              invisible: !isPasswordVisible,
              visible: isPasswordVisible,
              dirty: !!error,
              clean: !error,
            })}
            onClick={passwordToggleType}
          />
        </>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
          className="input"
        />
      )}
      {(error && value && isTouched) && error.map((item, idx) => (
        <p className="error" key={idx}>{item}</p>
      ))}
    </div>
  );
};

export default Input;
