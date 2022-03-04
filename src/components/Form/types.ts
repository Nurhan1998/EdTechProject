import { ObjectShape } from 'yup/lib/object';

import { TFormattedFormValues } from 'store/form/types';


export enum EFieldType {
  TEXT,
  TEXTAREA,
  SELECT,
  CHECKBOX,
  SEARCH,
  PASSWORD
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
  showIf?: (formValues: TFormattedFormValues) => boolean;
  disabledIf?: (formValues: TFormattedFormValues) => boolean;
  className?: string;
}

export interface IFormProps {
  disabled?: boolean;
  name: string;
  config: Array<IConfig>;
  className?: string;
  loading?: boolean;
  orientation?: EFormOrientation;
  actionsAnchor?: HTMLElement;
  validateSchema?: ObjectShape
}
