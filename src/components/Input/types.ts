import { InputHTMLAttributes } from 'react';

export interface IInputProps {
  isTouched?: boolean;
  label?: string;
  error?: string[];
  inputProps: InputHTMLAttributes<HTMLInputElement>
}


