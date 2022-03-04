import { InputHTMLAttributes } from 'react';

export interface IInputProps {
  isTouched?: boolean;
  label?: string;
  error?: string[];
  onButtonClick?: () => void;
  inputProps: InputHTMLAttributes<HTMLInputElement>
}


