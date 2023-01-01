import { Dashboard } from "../components/dashboard/dashboard.component";
import { Home } from "../components/home/home.component";

const UserRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '*',
    element: <Dashboard />
  }
];

export default UserRoutes;
