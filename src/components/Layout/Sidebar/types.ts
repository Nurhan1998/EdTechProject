import { Dispatch, SetStateAction } from 'react';

export interface ISidebar {
  setSidebarWidth: Dispatch<SetStateAction<number>>;
}

export interface ILinkItem {
  path: string;
  isActive?: boolean;
  icon: JSX.Element;
  name: string;
  className?: string;
}
