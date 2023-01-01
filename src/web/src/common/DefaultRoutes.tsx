import Login from "../features/authentication/login.feature";
import { Dashboard } from "../components/dashboard/dashboard.component";
import { Home } from "../components/home/home.component";

const DeafultRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
];

export default DeafultRoutes;
