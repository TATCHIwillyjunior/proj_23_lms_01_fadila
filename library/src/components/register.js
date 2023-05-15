import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Login from './login';
//import "./login.css";
import  './register.css';
import image from "../images/library1.jpeg";



function Registration(){
    
    const [name, setName] = useState("");

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleSubmit(e){
        e.preventDefault();

        if(!name || !id || !password || !phone){
            setFlag(true);
        }else{
            setFlag(false);
            localStorage.setItem("Id", JSON.stringify(id));
            localStorage.setItem("Password", JSON.stringify(password));

            console.log("Save in local storage");
            setLogin(!login);
        }
    
    }
     function handleClick(){
        setLogin(!login);
    }


    return(
      //  <div className="back">

<div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:790,width:1380
    }}>
        <div className="outer">
        {" "}  

{login ? (

<div className='inner'>

           <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className='form-group'>
                    <label>Name</label>
                    <input
                    type='text'
                    className='form-control'
                    placeholder="Enter Full Name" name = "name"
                    onChange={(event)=> setName(event.target.value)}
                    />
                </div>
                
                <div className='form-group'>
                    <label>Id</label>
                    <input
                    type='number'
                    className='form-control'
                    placeholder='Enter id number'
                    onChange={(event) => setId(event.target.value)}
                    />
                </div>

                <div className='form-group'>
                    <label>Password</label>
                    <input
                    type='password'
                    className='form-control'
                    placeholder='Enter password'
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                    type='email'
                  className='form-control'
                  placeholder='Enter contact number'
                 onChange={(event) => setPhone(event.target.value)}
                     />
                </div><br/>
                <button type='submit' className='btn btn-dark btn-lg btn-block'>
                    Register
                </button>

                <p className="Forgot-password" onClick={handleClick}>Already registered  Login in?</p>

                {flag &&(
                    <Alert color= "primary" variant= 'danger'>
                        Please Fill Every Field
                    </Alert>     
            )}

            </form>


            </div>   

            ):(
                
       <Login />
         )}
        </div>

        </div>
    );
}

export default Registration;