import { FC, useState } from 'react';
import cn from 'classnames';

import RightSideBar from 'components/Layout/RightSideBar';

import Sidebar from './Sidebar';
import Header from './Header';
import { ILayout } from './types';


const Layout: FC<ILayout> = ({
  layoutClassName,
  pageClassName,
  children
}) => {
  const [sidebarWidth, setSidebarWidth] = useState<number>(0);
  const [rightSideBarWidth, setRightSidebarWidth] = useState<number>(0);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  return (
    <div
      className={cn('layout_wrapper', layoutClassName)}
      style={{ paddingTop: headerHeight, paddingLeft: sidebarWidth, paddingRight: rightSideBarWidth }}
    >
      <Header setHeaderHeight={setHeaderHeight} sidebarWidth={sidebarWidth} rightSideBar={rightSideBarWidth}/>
      <Sidebar setSidebarWidth={setSidebarWidth}/>
      <RightSideBar setRightSidebarWidth={setRightSidebarWidth}/>
      <div className={cn('layout_inner-wrapper', pageClassName)}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
