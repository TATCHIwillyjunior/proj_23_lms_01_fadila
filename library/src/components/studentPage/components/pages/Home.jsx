import React from "react";

import "./Home.style.css";

export default function Home() {
  return (
    <div className="account-menu">
      <div className="acct-menu1">
        <h1>My Profile</h1>
        <div className="profile-info">
          <div className="user">
            <div className="photo">
              <h3>image</h3>
            </div>
            <div className="name">
              <h5>TATCHI junior</h5>
              <p>
                <b>Department:</b> Computer Science
              </p>
              <p>
                <b>Student ID:</b> BIT56984
              </p>
            </div>
          </div>
          <div className="contact">
            <p>
              <b>Phone:</b> 000-00-00-00
            </p>
            <p>
              <b>Email:</b> becareful.com
            </p>
            <p>
              <b>Birthday:</b> 30/2/2023
            </p>
            <p>
              <b>Address:</b> somewhere
            </p>
            <p>
              <b>Gender:</b> Male
            </p>
          </div>
        </div>
      </div>
      <div className="acct-menu2">
        <h1>My Status</h1>
      </div>
    </div>
  );
}
