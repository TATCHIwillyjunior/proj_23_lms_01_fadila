import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

//import image from "./components/library1.jpeg";
//import Login from "./components/login";
import About from "./components/HomePage/about";
import Footer from "./components/HomePage/footer";
import Libraries from "./components/HomePage/Libraries";
import Navbar from "./components/HomePage/Navbar";
//import Books from './components/HomePage/Books';
//import Subscriber from './components/register';
import { Link } from "react-router-dom";
//import Books from "./components/studentPage/component/pages/Books";
//import AddBook from './components/librarianPage/addBook';

function App() {
  return (
    <div>
      <Navbar />

      <div className="back-image">
        <section id="contact">
          <h1 className="color">
            {" "}
            WELCOME TO OUR <br /> LIBRARY MANAGEMENT SYSTEM
          </h1>
        </section>

        <div className="buttons" id="buttons">
          <Link to="register">
            <button id="sub" className="btn btn-dark btn-lg btn-block">
              Subscriber
            </button>
          </Link>
          <Link to="LibrarianLog">
            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              id="admin"
            >
              Administrator
            </button>
          </Link>
        </div>
        <div id="bottom">
          <Libraries />
          <About />
          <Footer> </Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
