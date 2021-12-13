import { FC, useEffect, useRef } from 'react';

import { IRightSidebar } from 'components/Layout/RightSideBar/types';

const RightSideBar: FC<IRightSidebar> = ({ setRightSidebarWidth }) => {
  const rightSidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rightSidebarRef.current?.clientWidth) {
      setRightSidebarWidth(rightSidebarRef.current.clientWidth);
    }
  }, [rightSidebarRef, setRightSidebarWidth]);

  return (
    <div className="right-sidebar" ref={rightSidebarRef}>
      <div className="right-sidebar_inner">
        <div>
          test
        </div>
      </div>
    </div>
  );
};
export default RightSideBar;
