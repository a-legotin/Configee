import { Component } from "react";
import { Routes, Route } from "react-router-dom";

import DefaultRoutes from "./common/DefaultRoutes";
import Layout from "./components/layout/layout.component";
import { useAppSelector } from "./hooks/hooks";
import "./index.css";

export default class App extends Component {

  render() {
    return (
      <Layout>
        <Routes>
          {DefaultRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
