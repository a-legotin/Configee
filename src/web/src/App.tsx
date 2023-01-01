import { Routes, Route } from "react-router-dom";
import DeafultRoutes from "./common/DefaultRoutes";
import UserRoutes from "./common/UserRoutes";
import Layout from "./components/layout/layout.component";
import { useAppSelector } from "./hooks/hooks";
import "./index.css";

function App() {
  const isLogin = useAppSelector((state) => state.auth.isLogin)
  return (
    <div className="App">
      {isLogin &&
        <>
          <Layout>
            <Routes>
              {UserRoutes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route key={index} {...rest} element={element} />;
              })}
            </Routes>
          </Layout>
        </>
      }
      {!isLogin &&
        <>
          <Layout>
            <Routes>
              {DeafultRoutes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route key={index} {...rest} element={element} />;
              })}
            </Routes>
          </Layout>
        </>
      }

    </div>
  );
}

export default App;
