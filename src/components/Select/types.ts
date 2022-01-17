import { TFieldValue } from 'store/form/types';

export type TSelectItem = {
  value: string;
  label: string;
}

export interface ISelect {
  onChange?: (value: TFieldValue) => void;
  disabled?: boolean;
  className?: string;
  options: TSelectItem[];
  label?: string;
}
