import React, { useState } from "react";
import "./sidebar.style.css";

import Dropdown from "./dropdown.components";

export default function Sidebar() {
  const [selected, setSelected] = useState("");
  return (
    <div className="sidebar">
      <div className="side-title">Main</div>

      <ul>
        <li className="active">
          <a href="/account"> My Account</a>
        </li>
        <li>
          <a href="/dashboard">
            {" "}
            <Dropdown selected={selected} setSelected={setSelected} />
          </a>
        </li>
        <li>
          <a href="/books-report"> Books Report</a>
        </li>
        <li>
          <a href="/logout"> logout</a>
        </li>
      </ul>
    </div>
  );
}
