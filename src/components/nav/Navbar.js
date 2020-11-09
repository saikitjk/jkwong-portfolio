import React, { useState } from "react";
import "./style.css";

export default function Navbar() {
  const [activeState, setActiveState] = useState("About");
  return (
    <>
      <div className="navbar">
        <div className="navbar_active">{activeState}</div>

        <div className="navbar_objects">
          <div
            className="navbar_object"
            onClick={() => setActiveState("About")}
          >
            About
          </div>
          <div
            className="navbar_object"
            onClick={() => setActiveState("Resume")}
          >
            Resume
          </div>
          <div
            className="navbar_object"
            onClick={() => setActiveState("Projects")}
          >
            Projects
          </div>
        </div>
      </div>
    </>
  );
}
