import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';
import Table from '~/pages/Table';
import Chart from '~/pages/Aquatic-Chart';
const publicRoutes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/table', component: Table },
  { path: '/quanly/bieudo/:id', component: Chart },
];
const privateRoutes = {};

export { publicRoutes, privateRoutes };
