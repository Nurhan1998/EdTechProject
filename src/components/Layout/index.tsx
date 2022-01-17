import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { Languages } from 'mocks/languages';

import RightSideBar from 'components/Layout/RightSideBar';
import BurgerMenu from 'components/BurgerMenu';

import disableBodyScroll from 'utils/disableBodyScroll';

import Sidebar from './Sidebar';
import Header from './Header';
import { ILayout } from './types';


const Layout: FC<ILayout> = ({
  layoutClassName,
  pageClassName,
  children,
  withoutRightSidebar= false
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const [language, setLanguage] = useState<string>(Languages[0].name);
  const [visible, setVisible] = useState<boolean>(false);

  const handleClickMenu = (): void => {
    setVisible(!visible);
  };

  useEffect(() => {
    disableBodyScroll(visible);
  },[visible]);

  return(
    <div className={cn('layout_wrapper', layoutClassName)}>
      <Sidebar />
      <div
        className={cn('layout_inner-wrapper', pageClassName)}
        style={{ maxWidth: withoutRightSidebar ? '' : 820, marginRight: withoutRightSidebar && !isMobile ? 8 : '' }}
      >
        <Header
          handleClickMenu={handleClickMenu}
          language={language}
          visible={visible}
          setLanguage={setLanguage}
        />
        <BurgerMenu language={language} setLanguage={setLanguage} visible={visible}/>
        {children}
      </div>
      {!withoutRightSidebar && <RightSideBar />}
    </div>
  );
};

export default Layout;
