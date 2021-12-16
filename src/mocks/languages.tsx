import SpainFlag from 'components/Icons/Header/SpainFlag';
import USFlag from 'components/Icons/Header/USFlag';
import RusFlag from 'components/Icons/Header/RusFlag';

interface ILanguage {
  name: string;
  id: number;
  icon: JSX.Element;
}

export const Languages: ILanguage[] = [
  {
    name: 'English',
    id: 2,
    icon: <USFlag/>
  },
  {
    name: 'Spain',
    id: 1,
    icon: <SpainFlag/>
  },
  {
    name: 'Russian',
    id: 3,
    icon: <RusFlag/>
  }
];
