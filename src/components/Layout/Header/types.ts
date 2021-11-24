import { Dispatch, SetStateAction } from 'react';

export interface IHeader {
  className?: string;
  setHeaderHeight: Dispatch<SetStateAction<number>>;
  sidebarWidth: number;
}
