import React from "react";
import "./style.css";
import Phone from "../../assets/images/phone.png";
import Email from "../../assets/images/email.png";
import Jk from "../../assets/images/jk.jpg";
import Resume from "../../assets/images/resume.png";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <div className="sideMenu">
      <img src={Jk} alt="profile" className="profilePic" />
      <h1 className="myName">Jason Kwong</h1>
      <div className="title">Full Stack Developer</div>

      <div className="side_file">
        <a href="https://drive.google.com/file/d/1uf9TAzXfz6H7qDwzpKaI7TUIBn5PF1fC/view?usp=sharing">
          <img className="side_icon" src={Resume} alt="resume" />
          Download Resume
        </a>
      </div>

      <div className="side_location">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-2x" />
        Seattle, WA
      </div>

      <div className="side_contacts">
        <div className="contact_item">
          <a href="https://github.com/saikitjk">
            <FontAwesomeIcon icon={faGithub} className="fa-2x" />
            Github
          </a>
        </div>
        <div className="contact_item">
          <a href="https://www.linkedin.com/in/saikitjk/">
            <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
            Linkedin
          </a>
        </div>

        <div className="row side_emailAndPhone">
          <div className="col-md-6 ">
            <a href="mailto:skjkwong@gmail.com">
              <img
                className="side_icon"
                src={Email}
                alt="email"
                data-tip={"skjkwong@gmail.com"}
                data-for="emailPopup"
                data-delay-show={250}
                data-delay-hide={250}
                data-border={true}
                data-type="dark"
              />
            </a>
            <ReactTooltip
              className="emailPopup"
              id="emailPopup"
              place="top"
              effect="solid"
            />
          </div>

          <div className="col-md-6 ">
            <img
              src={Phone}
              className="side_icon"
              id="phoneIcon"
              alt="phone"
              data-tip={"253-389-6796"}
              data-for="phonePopup"
              data-event="click focus"
              data-border={true}
              data-type="dark"
            />
            <ReactTooltip
              getContent={(dataTip) => <div>{dataTip}</div>}
              effect="solid"
              delayHide={500}
              delayShow={500}
              delayUpdate={500}
              className="phonePopup"
              id="phonePopup"
              globalEventOff="click"
              clickable={true}
              place="top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
