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

export const SidebarList: ILinkItem[] = [
  {
    path: HOME_PAGE,
    icon: <Dashboard/>,
    name: 'Dashboard'
  },
  {
    path: PROFILE,
    icon: <Profile/>,
    name: 'Profile'
  }, {
    path: COURSES,
    icon: <Calendar/>,
    name: 'Calendar'
  }, {
    path: CHAT_PAGE,
    icon: <Chat/>,
    name: 'Chat'
  },
  {
    path: JOBS,
    icon: <Jobs/>,
    name: 'Jobs list'
  },
  {
    path: FAVORITES,
    icon: <Favorite/>,
    name: 'My Favorite'
  },
  {
    path: SETTINGS,
    icon: <Settings/>,
    name: 'Settings'
  },
  {
    path: LOGOUT,
    icon: <LogOut/>,
    name: 'Logout'
  },
];
