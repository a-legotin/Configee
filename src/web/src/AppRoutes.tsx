import { Counter } from "./components/counter/Counter";
import { Home } from "./components/home/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Counter />
  }
];

export default AppRoutes;
