import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Login = React.lazy(() => import("../component/Login"));

const ListUser = React.lazy(() => import("../component/ListUser"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Login} />
      <Route exact path="/login" Component={Login} />
      <Route exact path="/users" Component={ListUser} />
    </Routes>
  );
};

export default MainRoutes;
