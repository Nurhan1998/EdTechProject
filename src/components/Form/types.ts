import { TFormValues } from 'store/form/types';

export enum EFieldType {
  TEXT,
  TEXTAREA,
  SELECT,
  CHECKBOX
}

export enum ESelectType {
  RAW_SELECT,
  VALUE_SET,
}

export enum EFormOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

export interface IConfig {
  name: string;
  type: EFieldType;
  selectType?: ESelectType;
  inputType?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  showIf?: (formValues: TFormValues) => boolean;
  disabledIf?: (formValues: TFormValues) => boolean;
  className?: string;
}

export interface IFormProps {
  name: string;
  config: Array<IConfig>;
  className?: string;
  loading?: boolean;
  orientation?: EFormOrientation;
  actionsAnchor?: HTMLElement;
  validateFn?: (values: TFormValues) => Record<string, string>;
}
