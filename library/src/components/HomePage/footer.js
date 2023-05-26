import React, { Component } from 'react'
import  './footer.css';


export default class About extends Component {
    render() {
        return (
            <div>

                <div  class="row">
                    <div ></div>
					<div className="col-sm-10 csshobe">
				   <p><b className="fontsize"> </b> </p>
				 </div>
				 </div>


               <div className="row footer">
                   <div className="col-sm-4">
                    <h2 className="deve"> <u>Developer</u></h2>
                    <h6>Fadila Yamfam</h6>
                    <h6>Tanyi Joshua</h6>
                    <h6>Tatchi Willy</h6>
                   </div>
                   <div className="col-sm-4">

                  
                   </div>
                   <div className="col-sm-4">
                   <h2 className="deve"> <u>Contact Us</u> </h2>
                   <h6>Contact, Yaounde Emana</h6>
                   <h6>Contact, Yaounde</h6>
                   <h6>Contact, Yaounde Emana</h6>
                  <p className="deve"> </p>
                  <p className="deve"></p> 
                   </div>
                   </div>
            </div>
        )
    }
}