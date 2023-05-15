import React, { useState } from "react";
import "./Login.css";
import {Alert} from 'react-bootstrap';
//import { database } from "./container/Database";


function Login(){
    const[idlog, setIdlog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const[flag, setFlag] = useState(false);
    const[home, setHome] = useState(true);

//flag is used to display functionality

function handleLogin(e){
    e.preventDefault();
    let mail = localStorage.getItem('Id').replace(/"/g,"");
    let pass = localStorage.getItem('Password').replace(/"/g,"");


    if(!idlog || !passwordlog){
        setFlag(true);
        console.log("Empty");
    }else if(passwordlog !== pass || idlog !== mail){
        setFlag(true)
    }else{
        setHome(!home);
       setFlag(false);
    }
}


return(
        <div className="outer">
            
                <div className='inner'>
            <form onSubmit={handleLogin}>
                <h1>LogIn</h1>
            <div className='form-group'>
                    <label>Id</label>
                    <input
                    type='number'
                    className='form-control'
                    placeholder='Enter id number'
                    onChange={(event) => setIdlog(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                    type='password'
                   className='form-control'
                    placeholder='Enter password'
                    onChange={(event) => setPasswordlog(event.target.value)}
                    />
                </div><br/>
                <button type='submit' className='btn btn-dark btn-lg btn-block'>
                    Login
                </button>
                {flag &&(
                    <Alert color= "primary" variant= 'danger'>
                       Please Fill Every Field
                  </Alert>     
            )}
             </form>
             </div>
            
        </div>
    );
}

export default Login;