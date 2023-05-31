import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./login";
//import "./login.css";
import "./register.css";
import book from '../images/book.png';
import Navbar from '../components/HomePage/Navbar';
import Footer from '../components/HomePage/footer';
//import image from "../images/library1.jpeg";

//<h1> handleSubmit gets the current value of state.Value and adds it to the array of webhooks</h1>
//<h1>PLACEHOLDER to reserve space for content that soon will appear in a layout</h1>
//<h1>detects when the value of an input elt changes  ONCHANGE</h1>

function Registration() {
  const [name, setName] = useState("");

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !id || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Id", JSON.stringify(id));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("Save in local storage");
      setLogin(!login);
    }
  }
  function handleClick() {
    setLogin(!login);
  }

  return (
    //<div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",
    //  height:790,width:1380
    //}}>
    <div className="outer">
      {" "}
      {login ? (
        <div className="style">
          <Navbar/>
          <div className="inner">
            <form onSubmit={handleSubmit}>
              <h2>
              <img src={book} alt=" " id="books" />
                <strong> Register </strong>
              </h2>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Id</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter id number"
                  onChange={(event) => setId(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
              </button>

              <p className="Forgot-password" onClick={handleClick}>
                Already registered Login in?
              </p>

              {flag && (
                <Alert color="primary" variant="danger">
                  Please Fill Every Field
                </Alert>
              )}
            </form>
          </div>
          <Footer/>
        </div>
      ) : (
        <Login />
      )}
    </div>

    // </div>
  );
}

export default Registration;
