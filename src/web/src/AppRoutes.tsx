import { Login } from "./components/authentication/login.component";
import { Home } from "./components/home/home.component";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
];

export default AppRoutes;
