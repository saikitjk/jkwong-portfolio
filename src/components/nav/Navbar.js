import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  const [activeState, setActiveState] = useState("");
  //useEffect hook to check the url when the app is loaded the first time
  useEffect(() => {
    let currentURL = window.location.href;
    if (currentURL.endsWith("/")) setActiveState("About");
    else if (currentURL.endsWith("/resume")) setActiveState("Resume");
    else if (currentURL.endsWith("/projects")) setActiveState("Projects");
  }, [activeState]);

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
