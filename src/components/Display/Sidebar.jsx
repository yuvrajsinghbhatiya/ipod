// Import necessary dependencies and styles
import React from "react";
import "./Sidebar.css";

function Sidebar(props) {
  // Destructure active prop
  const { active } = props;

  // Render sidebar with list items and classes based on active prop
  return (
    <>
      <div className="sidebar">
        <ul>
          <li className={`${active === 0 ? "selected" : ""}`}>
            {" "}
            <i class="fa-solid fa-clock"></i>&nbsp; Clock
          </li>

          <li className={`${active === 1 ? "selected" : ""}`}>
            {" "}
            <i className="fa-solid fa-music"></i>&nbsp; Music
          </li>

          <li className={`${active === 2 ? "selected" : ""}`}>
            <i className="fa-solid fa-gamepad"></i>&nbsp; Games
          </li>

          <li className={`${active === 3 ? "selected" : ""}`}>
            <i className="fa-solid fa-gear"></i>&nbsp; Setting
          </li>
        </ul>
      </div>
    </>
  );
}

// Export Sidebar component
export default Sidebar;
