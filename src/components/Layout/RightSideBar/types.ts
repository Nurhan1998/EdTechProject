import { Dispatch, SetStateAction } from 'react';

export interface IRightSidebar {
  setRightSidebarWidth: Dispatch<SetStateAction<number>>;
}

export interface IFavoriteUserCard {
  name: string;
  hskill: number;
  sskill: number;
  avatar: string;
}