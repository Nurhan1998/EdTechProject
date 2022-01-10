import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { Languages } from 'mocks/languages';
import MediaQuery from 'react-responsive';

import SidebarLogo from 'components/Icons/Sidebar/SidebarLogo';
import BurgerMenuLines from 'components/Icons/burgerMenuLines';
import CrossLines from 'components/Icons/CrossLines';
import BurgerMenu from 'components/BurgerMenu';

import Profile from './components/Profile';
import { IHeader } from './types';


const Header = ({ className, setHeaderHeight, sidebarWidth, rightSideBar }: IHeader): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState<string>(Languages[0].name);
  const [visible, setVisible] = useState<boolean>(false);

  const handleClickMenu = (): void => {
    setVisible(!visible);
  };

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
          <span onClick={handleClickMenu}>
            {visible ? <CrossLines width={24} height={24}/> : <BurgerMenuLines/>}
          </span>
        </MediaQuery>
        <div className="header_action__wrapper">
          <p className="action-title">{language}</p>
          {Languages.map(({ icon, id, name,className }) => (
            <span
              key={`${id}_${name}`}
              className={`action ${className ? className: ''}`}
              onClick={() => setLanguage(name)}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
      <BurgerMenu language={language} setLanguage={setLanguage} visible={visible}/>
    </div>
  );
};

export default Header;
