import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { Languages } from 'mocks/languages';
import MediaQuery from 'react-responsive';

import SidebarLogo from 'components/Icons/Sidebar/SidebarLogo';
import BurgerMenu from 'components/Icons/burgerMenu';

import Profile from './components/Profile';
import { IHeader } from './types';



const Header = ({ className, setHeaderHeight, sidebarWidth, rightSideBar }: IHeader): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState<string>(Languages[0].name);

  useEffect(() => {
    if (headerRef?.current?.clientHeight) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [headerRef, setHeaderHeight]);

  return (
    <div
      ref={headerRef}
      className={cn('header_wrapper', className)}
      style={{ left: sidebarWidth, right: rightSideBar }}
    >
      <div className="header_inner-wrapper">
        <div className="header_profile__wrapper">
          <Profile/>
        </div>
        <MediaQuery maxWidth={500}>
          <SidebarLogo height={32} width={87}/>
          <BurgerMenu/>
        </MediaQuery>
        <div className="header_action__wrapper">
          <p className="action-title">{language}</p>
          {Languages.map(({ icon, id, name }) => (
            <span
              key={`${id}_${name}`}
              className="action"
              onClick={() => setLanguage(name)}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
