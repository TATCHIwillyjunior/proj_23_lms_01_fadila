import React, {Component} from "react";
import { Link } from 'react-router-dom';
import './Libraries.css';
import cs from '../../images/cs.jpeg';
import eet from '../../images/eet.jpg';
import met from '../../images/met.jpeg';
import econ from '../../images/Economics.jpeg';
export default class libraries extends Component{
    render(){
        return(
            <div id='libraries'>
                <h2><strong>LIBRARIES</strong></h2>
                <div id="img">
                    <div class = 'computer'>
                         <h4>CS & IT DEPARTMENT LIBRARY</h4>
                        <img src={cs} alt=" " id="cs"/>
                    </div>
                    <div class = 'electric'><br/>
                        <h4>EET DEPARTMENT LIBRARY</h4>
                        <img src={eet} alt=" " id="eet"/>
                    </div>
                    <div class = 'mechanics'><br/>
                         <h4>MET DEPARTMENT LIBRARY</h4>
                        <img src={met} alt=" " id="met"/>
                    </div>
                    <div class = 'economics'><br/>
                        <h4>ECONOMICS DEPARTMENT LIBRARY</h4>
                        <img src={econ} alt=" " id="econ"/><br/><br/>
                    </div>
                </div>
                <Link to = "register" id="signup">
                            <button id='sub' className='btn btn-dark btn-lg btn-block'>Sign_Up>>></button> 
                        </Link>
            </div>

        );
    }
}



