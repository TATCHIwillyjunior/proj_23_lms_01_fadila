import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
//import {BrowserRouter as Route, Router} from 'react-router-dom';



import image from "./components/library1.jpeg";
//import Login from "./components/login";
import About from './components/HomePage/about'
import Footer from "./components/HomePage/footer";
import Libraries from "./components/HomePage/Libraries"
import Navbar from "./components/HomePage/Navbar";
//import Books from './components/HomePage/Books';
//import Subscriber from './components/register';
import { Link } from 'react-router-dom';
//import AddBook from './components/librarianPage/addBook';




function App(){
  return (
    <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:780,width:1370
    }}>
      <Navbar />
      

      <section id = "contact">
      <h1> WELCOME TO OUR <br/> LIBRARY MANAGEMENT SYSTEM</h1>
        
      </section> 

      <div className = "buttons" id="buttons">
      <Link to = "register">
        <button id='sub' className='btn btn-dark btn-lg btn-block'>Subscriber</button> 
      </Link>
      <Link to = "LibrarianLog">
      <button type='submit' className='btn btn-dark btn-lg btn-block' id="admin">
                    Administrator
                </button>
      </Link>
      </div> 
      <div id='bottom'>
      <Libraries/>
      <About/>
      <Footer> </Footer>
      </div>
    </div>   
  );

}


export default App;
