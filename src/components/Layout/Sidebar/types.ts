import { Dispatch, SetStateAction } from 'react';

export interface ISidebar {
  setSidebarWidth: Dispatch<SetStateAction<number>>;
}