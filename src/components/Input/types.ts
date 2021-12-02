import { Control } from 'react-hook-form';

export type IInputProps = {
  label?: string;
  className?: string;
  type?: string;
  error?: boolean;
  errorMessage?: string;
  placeholder?: string;
  value?: any;
  onChange?: (e: any) => void;
}

export type TCustomControllerProps = {
  name: string;
  control?: Control;
} & IInputProps
