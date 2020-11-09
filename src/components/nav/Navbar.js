import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar_active">About</div>

        <div className="navbar_objects">
          <div className="navbar_object">About</div>
          <div className="navbar_object">Resume</div>
          <div className="navbar_object">Projects</div>
        </div>
      </div>
    </>
  );
}
