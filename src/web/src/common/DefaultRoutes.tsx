import Login from "../components/authentication/login.component";
import { Home } from "../components/home/home.component";

const DeafultRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Login />
  }
];

export default DeafultRoutes;
