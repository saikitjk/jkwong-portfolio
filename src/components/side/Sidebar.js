import React, { useState, useEffect } from "react";
import "./style.css";

import Git from "../../assets/images/github.png";
import Linkedin from "../../assets/images/in.png";
import Phone from "../../assets/images/phone.png";
import Email from "../../assets/images/email.png";
import Jk from "../../assets/images/jk.jpg";
import Pin from "../../assets/images/location.png";
import Resume from "../../assets/images/resume.png";

export default function Sidebar() {
  return (
    <div className="sideMenu">
      <img src={Jk} alt="profile" className="profilePic" />
      <div className="myName">Jason Kwong</div>
      <div className="title">Full Stack Developer</div>

      <div className="side_file">
        <a href="https://drive.google.com/file/d/1uf9TAzXfz6H7qDwzpKaI7TUIBn5PF1fC/view?usp=sharing">
          <img className="side_icon" src={Resume} alt="resume" />
          Resume
        </a>
      </div>

      <div className="side_location">
        <img className="side_icon" src={Pin} alt="location" />
        Seattle, WA
      </div>

      <div className="side_contacts">
        <div className="contact_item">
          <a href="https://github.com/saikitjk">
            <img className="side_icon" src={Git} alt="git" />
            Github
          </a>
        </div>
        <div className="contact_item">
          <a href="https://www.linkedin.com/in/saikitjk/">
            <img className="side_icon" src={Linkedin} alt="Linkedin" />
            Linkedin
          </a>
        </div>
        <div className="contact_item">
          <img src={Phone} className="side_icon" alt="phone" />
          <span class="popuptext" id="phonePopup">
            253-389-6796
          </span>
        </div>
      </div>
      <div className="side_emailme">
        <a href="mailto:saikitjk@gmail.com">
          <img className="side_icon" src={Email} alt="email" />
          Email
        </a>
      </div>
    </div>
  );
}
