import { Dispatch, SetStateAction } from 'react';

export interface ISidebar {
  setSidebarWidth: Dispatch<SetStateAction<number>>;
}

export interface ILinkItem {
  path: string;
  isActive: boolean;
  iconName: string;
  name: string;
}
