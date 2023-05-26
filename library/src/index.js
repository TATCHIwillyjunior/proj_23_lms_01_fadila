import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Registration from './components/register';
import LibrarianLog from './components/librarianPage/LibrarianLog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/register",
    element: <Registration />
  },
  {
    path: "/LibrarianLog",
    element: <LibrarianLog />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
