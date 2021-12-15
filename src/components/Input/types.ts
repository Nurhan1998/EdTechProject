import { InputHTMLAttributes } from 'react';

export interface IInputProps {
  label?: string;
  error?: string[];
  inputProps: InputHTMLAttributes<HTMLInputElement>
}


