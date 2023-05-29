import React, { useState } from "react";

import "./dropdown.style.css";

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const showDropdown = () => {
    setIsActive(true);
  };
  const hideDropdown = () => {
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-menu"
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        Dashboard
        {isActive ? (
          <ul className="dropdown-list" onMouseEnter={showDropdown}>
            <li>Computer Science</li>
            <li>Mechanical Engineering</li>
            <li>Electrical Engineering</li>
            <li>Economics and Management</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown;
