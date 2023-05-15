import React, { Component } from 'react'
import  './footer.css';


export default class About extends Component {
    render() {
        return (
            <div>

        <h1>Aim of the project</h1>
                <div  class="row">
                    <div className="col-sm-1"></div>
					<div className="col-sm-10 csshobe">
				   <p > <b className="fontsize">
                   The Library Management System is a Library Management website for monitoring and controlling the transactions in a library. </b> </p>
				 </div>
				 </div>


               <div className="row footer">
                   <div className="col-sm-4">
                    <h2 className="deve"> <u>Developer</u> </h2>
                    <h6>Fadila Yamfam</h6>
                    <h6>Tani Joshua</h6>
                    <h6>Tatchi Willy</h6>
                   </div>
                   <div className="col-sm-4">

                  
                   </div>
                   <div className="col-sm-4">
                   <h2 className="deve"> <u>Contact Us</u> </h2>
                   <h6>Contact, Yaounde Emana</h6>
                   <h6>Contact, Yaounde</h6>
                  <p className="deve">  <i class="fab fa-facebook-square"></i> </p>
                  <p className="deve"><i class="fab fa-twitter-square"></i></p> 
                   </div>
                   </div>
            </div>
        )
    }
}