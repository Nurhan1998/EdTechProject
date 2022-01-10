import { SidebarList } from 'mocks/sidebarRoutes';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Input from 'components/Input';
import LinkItem from 'components/Layout/Sidebar/components/LinkItem';

import IsMenuActive from 'utils/IsMenuActive';

export interface IBurgerProps {
  visible: boolean;
  language: string;
  setLanguage: (name: string) => void;
}

const BurgerMenu = ({ visible, language, setLanguage }: IBurgerProps): JSX.Element => {
  const router = useRouter();
  return (
    <div className={`burger-menu ${visible? 'opened': 'closed'}`}>
      <div className="burger-menu_wrapper">
        <div className="header">
          <p>{language}</p>
          <div className="languages">
            <div
              className={cn('languages-item', 'eng' )}
              onClick={() => setLanguage('English')}
            />
            <div
              className={cn('languages-item', 'spain' )}
              onClick={() => setLanguage('Spain')}
            />
            <div
              className={cn('languages-item', 'rus' )}
              onClick={() => setLanguage('Russian')}
            />
          </div>
        </div>
        <div className="sidebar_search-wrapper">
          <Input inputProps={{ style: { width: 300, paddingLeft: 50 },type: 'search', placeholder: 'Search' }}/>
        </div>
        <div className="sidebar_links__wrapper">
          {SidebarList.map(({ path, name, icon }, idx) => (
            <LinkItem
              className="mobile"
              key={`${path}_${idx}`}
              path={path}
              isActive={IsMenuActive(path, router)}
              icon={icon}
              name={name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BurgerMenu;
