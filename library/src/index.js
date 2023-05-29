import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Registration from "./components/register";
import LibrarianLog from "./components/librarianPage/LibrarianLog";
import Books from "./components/studentPage/Books";
import { AppProvider } from "./components/studentPage/components/context/context";
import BookDetails from "./components/studentPage/components/BookDetails/BookDetails";
import Computer from "./components/studentPage/components/Subscriber/Daashboard/Computer/Computer";
import EET from "./components/studentPage/components/Subscriber/Daashboard/EET/EET";
import Mechanics from "./components/studentPage/components/Subscriber/Daashboard/MET/MET";
import Economics from "./components/studentPage/components/Subscriber/Daashboard/Economics/Economics";
//import WillyHome from "./components/studentPage/components/Subscriber/WillyHome";
import Account from "./components/studentPage/components/Subscriber/MyAccount/Account";

//import BookLists from "./components/studentPage/component/pages/Books";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/LibrarianLog",
    element: <LibrarianLog />,
  },
  {
    path: "/Books",
    element: <Books />,
  },
  {
    path: "/Account",
    element: <Account />,
  },

  {
    path: "/Books/:id",
    element: <BookDetails />,
  },
  {
    path: "/Computer",
    element: <Computer />,
  },
  {
    path: "/EET",
    element: <EET />,
  },
  {
    path: "/Mechanics",
    element: <Mechanics />,
  },
  {
    path: "/Economic",
    element: <Economics />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppProvider>
);

reportWebVitals();
