import { lazy } from "react";

import "./sass/index.scss";
import useTitle from "./hooks/useTitle";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./features/auth/RequireAuth";

const Home = lazy(() => import("./pages/Registration"));
const Login = lazy(() => import("./pages/Login"));
const Verification = lazy(() => import("./pages/Verification"));

function App() {
  useTitle("farm warehouse");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="verification" element={<Verification />} />
        <Route path="dashboard" element={<RequireAuth />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
