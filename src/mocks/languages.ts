interface ILanguage {
  name: string;
  id: number;
  size: number;
  path: string;
}

export const Languages: ILanguage[] = [
  {
    name: 'Spain',
    id: 1,
    size: 40,
    path: 'assets/img/svg/SpainFlag.svg'
  },
  {
    name: 'English',
    id: 2,
    size: 40,
    path: 'assets/img/svg/USFlag.svg'
  },
  {
    name: 'Russian',
    id: 3,
    size: 40,
    path: 'assets/img/svg/RusFlag.svg'
  }
];
