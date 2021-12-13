import { InputHTMLAttributes } from 'react';

export interface IMostInputProps {
  label?: string;
  error?:  string | string[];
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

