import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { HOME_PAGE } from 'configuration/urls';


import SidebarLogo from 'components/Icons/Sidebar/SidebarLogo';
import LinkItem from 'components/Layout/Sidebar/components/LinkItem';
import Input from 'components/Input';

import { SidebarList } from '../../../mocks/sidebarRoutes';

import { ISidebar } from './types';


const Sidebar = ({ setSidebarWidth }: ISidebar): JSX.Element => {
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
        <div className="sidebar_search-wrapper">
          <Input inputProps={{ type: 'search', placeholder: 'Search' }}/>
        </div>
        <div className="sidebar_links__wrapper">
          {SidebarList.map(({ path, name, icon }, idx) => (
            <LinkItem
              key={`${path}_${idx}`}
              path={path}
              isActive={isMenuActive(path)}
              icon={icon}
              name={name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
