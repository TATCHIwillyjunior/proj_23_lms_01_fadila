import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
//import {BrowserRouter as Route, Router} from 'react-router-dom';



import image from "./components/library1.jpeg";
//import Login from "./components/login";
import Footer from "./components/layout/footer";

import Navbar from "./components/layout/Navbar";
//import Subscriber from './components/register';
import { Link } from 'react-router-dom';
//import AddBook from './components/librarianPage/addBook';




function App(){
  return (
    <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:790,width:1380
    }}>
      <Navbar />
      

      <div className = "buttons">
      <Link to = "register">
        <button id='sub'>Subscriber</button> 
      </Link>
      <Link to = "LibrarianLog">
        <button id='adm'>Admin</button> 
      </Link>
      </div> 
      <section id = "contact">
        Register
        
      </section> 

      <Footer> </Footer>
    </div>   
  );

}


export default App;
