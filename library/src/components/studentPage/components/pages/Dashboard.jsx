import React, { Component } from "react";
import DashBooks from "./Dash-book";

import "./Dashboard.style.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dash-header">
          <h2>Hello User</h2>
        </div>
        <div className="dash-body">
          <DashBooks />
        </div>
      </div>
    );
  }
}

export default Dashboard;
