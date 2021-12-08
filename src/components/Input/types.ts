import { InputHTMLAttributes } from 'react';

export interface IAdditionalInputProps {
  label?: string;
  error?: boolean;
  errorMessage?: string | string[];
}

export type TInputProps = InputHTMLAttributes<HTMLInputElement> & IAdditionalInputProps

