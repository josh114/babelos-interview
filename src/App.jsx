import { lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./sass/index.scss";
import useTitle from "./hooks/useTitle";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Registration"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  useTitle("farm warehouse");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
