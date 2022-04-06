import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  return (
    <div className="row experienceRow">
      <h6 data-aos="fade-right">Experience</h6>
      <div className="row experienceListRow">
        <div className="col s7 m8 l9">
          <br />
          <h5 data-aos="zoom-in-right">
            <b>State of Washington Paid Family Medical Leave Program</b>
          </h5>
          <h6 data-aos="zoom-in-right">System Administrator</h6>
          <br />
          <ul data-aos="slide-up">
            <lh>
              <b>Administrator of applications</b>
            </lh>
            <li>
              Provided technical consultation for PFML mission critical
              applications.
            </li>
            <lh>
              <b>Design, development, and testing</b>
            </lh>
            <li>
              Developed a ticketing system to manage requests and provide clear
              incident tracking. The development involves designing workflows
              and business rules, and implementing custom features using
              Object-Oriented JavaScript. Successfully improved the efficiency
              of request processing and management significantly.
            </li>
            <lh>
              <b>Automation</b>
            </lh>
            <li>
              Responsible for automating procedures using PowerShell scripts,
              JavaScript and workflows
            </li>
            <lh>
              <b>Monitoring</b>
            </lh>
            <li>
              Developed and Define monitors using SCOM to monitor system state
              and availability.(SCOM, SQL DB, Windows Server 2012)
            </li>
            <br />
          </ul>
        </div>
        <div data-aos="zoom-in-left" id="eddates" class="col s5 m4 l3">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-lg" />
          Lacey, WA
          <br />
          <br />
          <FontAwesomeIcon icon={faCalendarAlt} className="fa-lg" /> October
          2018- Present
        </div>
      </div>

      <div className="row">
        <div className="col s7 m8 l9">
          <br />
          <h5 data-aos="zoom-in-right">
            <b>Accolade, Inc</b>
          </h5>
          <h6 data-aos="zoom-in-right">Desktop Engineer Intern</h6>
          <br />
          <ul data-aos="slide-up">
            <lh>
              <b>Technical Support</b>
            </lh>
            <li>
              Provided full desktop and infrastructure service to internal
              customers in the company both in person and remotely
            </li>
            <lh>
              <b>Technical Support</b>
            </lh>
            <li>
              Provided maintenance and problem solving with respect to
              workstations and desktop applications.
            </li>
            <lh>
              <b>Automation</b>
            </lh>
            <li>Develop automation to preform and improve routine task</li>
            <br />
          </ul>
        </div>
        <div data-aos="zoom-in-left" id="eddates" class="col s5 m4 l3">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-lg" /> Seattle,
          WA
          <br />
          <br />
          <FontAwesomeIcon icon={faCalendarAlt} className="fa-lg" />
          June 2018 - August 2018
        </div>
      </div>
    </div>
  );
}
