import { CHAT_PAGE, COURSES, FAVORITES, HOME_PAGE, JOBS, LOGOUT, PROFILE, SETTINGS } from 'configuration/urls';

import Dashboard from 'components/Icons/Sidebar/Dashboard';
import Profile from 'components/Icons/Sidebar/Profiles';
import Calendar from 'components/Icons/Sidebar/Calendar';
import Chat from 'components/Icons/Sidebar/Chat';
import Jobs from 'components/Icons/Sidebar/Jobs';
import Favorite from 'components/Icons/Sidebar/Favorite';
import Settings from 'components/Icons/Sidebar/Settings';
import LogOut from 'components/Icons/Sidebar/LogOut';
import { ILinkItem } from 'components/Layout/Sidebar/types';
import ActiveDashboard from 'components/Icons/Sidebar/Dashboard/Active';
import ActiveProfile from 'components/Icons/Sidebar/Profiles/Active';
import ActiveCalendar from 'components/Icons/Sidebar/Calendar/Active';
import ActiveChat from 'components/Icons/Sidebar/Chat/Active';
import ActiveJobs from 'components/Icons/Sidebar/Jobs/Active';
import ActiveFavorite from 'components/Icons/Sidebar/Favorite/Active';
import ActiveSettings from 'components/Icons/Sidebar/Settings/Active';

export const SidebarList: ILinkItem[] = [
  {
    path: HOME_PAGE,
    icon: isActive => isActive ? <ActiveDashboard/> : <Dashboard/> ,
    name: 'Dashboard'
  },
  {
    path: PROFILE,
    icon: isActive => isActive ? <ActiveProfile/> : <Profile/>,
    name: 'Profile'
  }, {
    path: COURSES,
    icon: isActive => isActive ? <ActiveCalendar/> : <Calendar/>,
    name: 'Calendar'
  }, {
    path: CHAT_PAGE,
    icon: isActive => isActive ? <ActiveChat/> : <Chat/>,
    name: 'Chat'
  },
  {
    path: JOBS,
    icon: isActive => isActive ? <ActiveJobs/> : <Jobs/>,
    name: 'Jobs list'
  },
  {
    path: FAVORITES,
    icon: isActive => isActive ? <ActiveFavorite/> : <Favorite/>,
    name: 'My Favorite'
  },
  {
    path: SETTINGS,
    icon: isActive => isActive ? <ActiveSettings/> : <Settings/>,
    name: 'Settings'
  },
  {
    path: LOGOUT,
    icon: () => <LogOut/>,
    name: 'Logout'
  },
];
