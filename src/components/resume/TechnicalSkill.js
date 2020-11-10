import React from "react";
import "./style.css";

export default function TechnicalSkill() {
  return (
    <div class="row techSkillRow">
      <h6 data-aos="fade-right">Technical Skills</h6>
      <div class="row techSkillListRow">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          class="col s12"
        >
          <br />
          <p>
            <b>Language: </b>Javascript, Python, SQL
          </p>
          <p>
            <b>Notation: </b>JSON, CSS, Sass
          </p>
          <p>
            <b>Database: </b>MySQL, MongoDB, MSSQL
          </p>
          <p>
            <b>Open Source: </b>Node.js, NPM
          </p>
          <p>
            <b>Framework: </b>ORM
          </p>
          <p>
            <b>Library: </b>React, JQuery
          </p>
          <p>
            <b>Markup Language: </b>HTML
          </p>
          <p>
            <b>Version Control: </b>Github
          </p>
          <p>
            <b>Software Development Cycle: </b>Agile
          </p>

          <p>
            <b>Network Protocol: </b>HTTP/HTTPS, TCP/IP, DNS, DHCP, SNMP, FTP
          </p>
        </div>
      </div>
    </div>
  );
}
