import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';
import Table from '~/pages/Table';
const publicRoutes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/table', component: Table },
];
const privateRoutes = {};

export { publicRoutes, privateRoutes };
