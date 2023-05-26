import React, { useState } from "react";
import Image from '../../images/lib.jpg';
//import AddStudent from './addBook';
import SubscriberStatus from '../studentPage/subscriberStatus';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        setEmail("");
        setPassword("");
    };

    return (
        <div style={{ backgroundImage:`url(${Image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
        height:620,width:1360
        }}>
            <div className="outer">
            <div className="inner">
        <main className='login'>
            <h2>Log into your account</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Email Address</label>
                <input
                    type='email'
                    id='email'
                    placeholder="Your email is required"
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div><br/>
                <div>
                <label>Password is required</label>
                <input
                    type='password'
                    id='password'
                    placeholder="Enter your credential sir"
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div><br/><br/>
                <button className='loginBtn'>SIGN IN</button>
            </form>
        </main>
        </div>
        </div>
        ):(
        <SubscriberStatus />
        </div>
    );
};
export default Login;