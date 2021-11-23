export type TSelectItem = {
  value: string;
  label: string;
}

export interface ISelect {
  className?: string;
  options: TSelectItem[];
  label?: string;
}
