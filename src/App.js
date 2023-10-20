// import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./route/MainRoutes";
import React, { Suspense } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ margin: "10px" }}>
          <Link to="/" style={{ padding: "5px" }}>
            dashboard
          </Link>
          <Link to="/login" style={{ padding: "5px" }}>
            login
          </Link>
          <Link to="/users">user list</Link>
        </nav>
        <Suspense>
          <MainRoutes />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
