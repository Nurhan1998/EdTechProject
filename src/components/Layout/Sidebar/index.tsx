import { FC, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CHAT_PAGE, HOME_PAGE } from 'configuration/urls';


import SidebarLogo from 'components/Icons/SidebarLogo';
import LinkItem from 'components/Layout/Sidebar/components/LinkItem';

import { ISidebar } from './types';


const Sidebar: FC<ISidebar> = ({ setSidebarWidth }): JSX.Element => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (sidebarRef.current?.clientWidth) {
      setSidebarWidth(sidebarRef.current.clientWidth);
    }
  }, [sidebarRef, setSidebarWidth]);

  const isMenuActive = (path: string): boolean => router.pathname === path;

  return (
    <div className="sidebar_wrapper" ref={sidebarRef}>
      <div className="sidebar-inner_wrapper">
        <div className="sidebar_logo__wrapper">
          <Link href={HOME_PAGE}>
            <a>
              <SidebarLogo/>
            </a>
          </Link>
        </div>
        <div className="sidebar_links__wrapper">
          <LinkItem path={HOME_PAGE} isActive={isMenuActive(HOME_PAGE)} iconName="home" name="Dashboard"/>
          {/*<div className={cn('sidebar_links__item', { active: isMenuActive(HOME_PAGE) })}>*/}
          {/*  <Link href={HOME_PAGE}>*/}
          {/*    <a>*/}
          {/*      Dashboard*/}
          {/*    </a>*/}
          {/*  </Link>*/}
          {/*</div>*/}


          <LinkItem name="Chat" path={CHAT_PAGE} iconName="Dashboard" isActive={isMenuActive(CHAT_PAGE)}/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
