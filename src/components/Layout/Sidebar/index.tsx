import Link from 'next/link';
import { useRouter } from 'next/router';
import { SidebarList } from 'mocks/sidebarRoutes';

import { HOME_PAGE } from 'configuration/urls';


import SidebarLogo from 'components/Icons/Sidebar/SidebarLogo';
import LinkItem from 'components/Layout/Sidebar/components/LinkItem';
import Input from 'components/Input';


import IsMenuActive from 'utils/IsMenuActive';


const Sidebar = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="sidebar_wrapper" >
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
              isActive={IsMenuActive(path, router)}
              icon={icon(IsMenuActive(path, router))}
              name={name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
