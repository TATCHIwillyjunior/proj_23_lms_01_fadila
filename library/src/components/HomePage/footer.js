import React, { Component } from "react";
import "./footer.css";

export default class About extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row footer">
          <div className="col-sm-4">
            <h1 className="deve">
              {" "}
              <u>Developer</u>
            </h1>
            <br />
            <h4>Fadila Yamfam</h4>
            <br />
            <h4>Tanyi Joshua</h4>
            <br />
            <h4>Tatchi Willy</h4>
            <br />
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <h1 className="deve">
              {" "}
              <u>Contact Us</u>
            </h1>
            <br />
            <h4>Contact, Yaounde Emana</h4>
            <br />
            <h4>Contact, Yaounde</h4>
            <br />
            <h4>Contact, Yaounde Emana</h4>
            <br />
            <p className="deve"> </p>
            <p className="deve"></p>
          </div>
        </div>
      </div>
    );
  }
}
