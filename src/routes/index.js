import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';
const publicRoutes = [
  { path: '/', component: Login },
  { path: '/login', component: Dashboard },
];
const privateRoutes = {};

export { publicRoutes, privateRoutes };
