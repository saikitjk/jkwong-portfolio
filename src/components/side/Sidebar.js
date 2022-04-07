import React from "react";
import "../side/style.css";
import Jk from "../../assets/images/jk.jpg";
import Resume from "../../assets/images/resume.png";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <div className="sideMenu">
      <img src={Jk} alt="profile" className="profilePic" />
      <h1 className="myName">Jason Kwong</h1>
      <div className="title">Full Stack Developer</div>

      <div className="side_file">
        <div className="resumeDownload">
          <a href="https://drive.google.com/file/d/1uf9TAzXfz6H7qDwzpKaI7TUIBn5PF1fC/view?usp=sharing">
            <img className="side_icon" src={Resume} alt="resume" />
            Download Resume
          </a>
        </div>
      </div>

      <div className="side_location">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="locationIcon" />
        Seattle, WA
      </div>

      <div className="side_contacts">
        <div className="contact_item">
          <a href="https://github.com/saikitjk">
            <FontAwesomeIcon icon={faGithub} className="gitIcon" />
            Github
          </a>
        </div>
        <div className="contact_item">
          <a href="https://www.linkedin.com/in/saikitjk/">
            <FontAwesomeIcon icon={faLinkedin} className="linkedinIcon" />
            Linkedin
          </a>
        </div>

        <div className="row side_emailAndPhone">
          <div className="col-md-6 ">
            <a href="mailto:skjkwong@gmail.com">
              <FontAwesomeIcon
                icon={faAt}
                className="fa-3x side_icon"
                id="emailIcon"
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
            <FontAwesomeIcon
              icon={faPhone}
              className="fa-2x side_icon"
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
