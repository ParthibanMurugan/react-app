import { useState } from "react";

import "./App.css";
import SideBar from "./SideBar";
import { navItems, routeItems } from "./constans/constants";
import { Route, Link, Routes, HashRouter } from "react-router-dom";
import Home from "./Home";
import { RouteModel } from "./common/Interfaces";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <SideBar menuItems={navItems}>
        <Routes>
          {routeItems.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </SideBar>
    </HashRouter>
  );
}

export default App;
