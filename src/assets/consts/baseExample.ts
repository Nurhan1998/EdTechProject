import {IUserCard} from 'components/../../pages/HomePage/types';

import {TSelectItem} from 'components/Select/types';

export const langBaseExample: TSelectItem[] = [
  {
    value: 'en',
    label: 'EN',
  },
  {
    value: 'ru',
    label: 'RU',
  },
  {
    value: 'eu',
    label: 'EU',
  }
];

export const socialBaseExample: TSelectItem[] = [
  {
    value: 'facebook',
    label: 'facebook',
  },
  {
    value: 'instagram',
    label: 'instagram',
  },
  {
    value: 'google',
    label: 'google',
  }
];

export const locationBaseExample: TSelectItem[] = [
  {
    value: 'Estonia',
    label: 'Estonia',
  },
  {
    value: 'France',
    label: 'France',
  },
  {
    value: 'Germany',
    label: 'Germany',
  }
];


export const userListBaseExample: IUserCard[] = [
  {
    id: '1',
    avatar: 'https://i.pravatar.cc/300?img=11',
    name: 'Lorem',
    surName: 'Random',
    hardSkill: 'hardSefekill',
    statusHardSkill: 7,
    softSkill: 'softfeefSkill',
    statusSoftSkill: 98,
  },
  {
    id: '2',
    avatar: 'https://i.pravatar.cc/300?img=12',
    name: 'aafLorem123',
    surName: 'fefeRandom',
    hardSkill: 'hardSefkill',
    statusHardSkill: 1,
    softSkill: 'softSfekill',
    statusSoftSkill: 50,
  },
  {
    id: '3',
    avatar: 'https://i.pravatar.cc/300?img=13',
    name: 'aefaefLorem',
    surName: 'aefaefRandom',
    hardSkill: 'aefaefaef',
    statusHardSkill: 3,
    softSkill: 'soaefaefftSkill',
    statusSoftSkill: 14,
  },
  {
    id: '4',
    avatar: 'https://i.pravatar.cc/300?img=14',
    name: 'aefafLorem',
    surName: 'aefRandom',
    hardSkill: 'aefhardSkill',
    statusHardSkill: 10,
    softSkill: 'aefsoftSkill',
    statusSoftSkill: 100,
  },
];