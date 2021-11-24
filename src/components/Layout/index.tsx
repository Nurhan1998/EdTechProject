import { FC, useState, useEffect } from 'react';
import cn from 'classnames';

import Sidebar from './Sidebar';
import Header from './Header';
import { ILayout } from './types';


const Layout: FC<ILayout> = ({
  layoutClassName, 
  pageClassName, 
  children 
}) => {
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [layoutSpaceParams, setLayoutSpaceParams] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    setLayoutSpaceParams({ top: headerHeight, left: sidebarWidth });
  }, [sidebarWidth, headerHeight]);

  return (
    <div
      className={cn('layout_wrapper', layoutClassName)}
      style={{ paddingTop: layoutSpaceParams.top, paddingLeft: layoutSpaceParams.left }}
    >
      <Header setHeaderHeight={setHeaderHeight} sidebarWidth={sidebarWidth}/>
      <Sidebar setSidebarWidth={setSidebarWidth}/>
      <div className={cn('layout_inner-wrapper', pageClassName)}>
        {children}
      </div>
    </div>
  );
};

export default Layout;