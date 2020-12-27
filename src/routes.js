import Auth from './pages/Auth';
import Database from './pages/Database';
import Home from './pages/Home';
import Storage from './pages/Storage';

export const sidebarRoutes = [
  {
    to: '/',
    name: 'Home',
    icon: 'fa fa-home',
  },
  {
    to: '/auth',
    name: 'Auth',
    icon: 'fas fa-key',
  },
  {
    to: '/database',
    name: 'Database',
    icon: 'fa fa-database',
  },
  {
    to: '/storage',
    name: 'Storage',
    icon: 'fa fa-file',
  },
];

export const appRoutes = [
  { path: '/', exact: true, component: Home },
  { path: '/auth', exact: true, component: Auth },
  { path: '/database', exact: true, component: Database },
  { path: '/storage', exact: true, component: Storage },
];
export default [];
