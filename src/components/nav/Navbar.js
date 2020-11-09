import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  const [activeState, setActiveState] = useState("About");
  return (
    <>
      <div className="navbar">
        <div className="navbar_active">{activeState}</div>

        <div className="navbar_objects">
          {activeState !== "About" ? (
            <Link to="/">
              <div
                className="navbar_object"
                onClick={() => setActiveState("About")}
              >
                About
              </div>
            </Link>
          ) : null}

          {activeState !== "Resume" ? (
            <Link to="/resume">
              {" "}
              <div
                className="navbar_object"
                onClick={() => setActiveState("Resume")}
              >
                Resume
              </div>
            </Link>
          ) : null}

          {activeState !== "Projects" ? (
            <Link to="/projects">
              {" "}
              <div
                className="navbar_object"
                onClick={() => setActiveState("Projects")}
              >
                Projects
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}
