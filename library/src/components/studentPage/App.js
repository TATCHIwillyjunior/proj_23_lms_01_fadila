import React from "react";

import Sidebar from "./components/sidebar/sidebar.components";
import "./App.css";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import BooksReport from "./components/pages/BooksReport";

function App() {
  let components;
  switch (window.location.pathname) {
    case "/":
      components = <App />;
      break;

    case "/account":
      components = <Home />;
      break;

    case "/dashboard":
      components = <Dashboard />;
      break;

    case "/books-report":
      components = <BooksReport />;
      break;

    default:
      break;
  }

  return (
    <div className="subscriber">
      <div className="header">
        <h1>LMS subscribe</h1>
      </div>
      <div className="menu">
        <Sidebar />
        {components}
      </div>
    </div>
  );
}

export default App;
