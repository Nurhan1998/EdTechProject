import { InputHTMLAttributes } from 'react';

export interface IInputProps {
  label?: string;
  error?: string | string[] | undefined;
  inputProps: InputHTMLAttributes<HTMLInputElement>
}


