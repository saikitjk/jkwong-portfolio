import React from "react";
import "./style.css";
import LogoGraduation from "../../assets/images/grad.png";
import LogoLocation from "../../assets/images/location.png";

export default function Education() {
  return (
    <div className="row educationRow">
      <h3 data-aos="fade-right" margin-top="50px">
        Education
      </h3>
      <div className="row educationListRow">
        <div className="col s7 m8 l9">
          <br />
          <h5 data-aos="zoom-in-right">
            <b>University of Washington</b>
          </h5>
          <h6 data-aos="zoom-in-right">Full-Stack Coding Bootcamp</h6>
        </div>
        <div data-aos="zoom-in-left" id="eddates" class="col s5 m4 l3">
          <img src={LogoLocation} alt="location icon" width="10%" /> Seattle, WA
          <br />
          <br />
          <img src={LogoGraduation} alt="graduation icon" width="10%" />{" "}
          December 2020
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col s7 m8 l9">
          <br />
          <h5 data-aos="zoom-in-right">
            <b>University of Washington</b>
          </h5>
          <h6 data-aos="zoom-in-right">
            Bachelor of Science in Information Technology and Systems
          </h6>
        </div>
        <div data-aos="zoom-in-left" id="eddates" class="col s5 m4 l3">
          <img src={LogoLocation} alt="location icon" width="10%" /> Tacoma, WA
          <br />
          <br />
          <img src={LogoGraduation} alt="graduation icon" width="10%" /> June
          2018
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col s7 m8 l9">
          <br />
          <h5 data-aos="zoom-in-right">
            <b>University of Washington</b>
          </h5>
          <h6 data-aos="zoom-in-right">
            Bachelor of Arts in Interdisciplinary Arts and Sciences with a
            concentration in Global Studies
          </h6>
        </div>
        <div data-aos="zoom-in-left" id="eddates" class="col s5 m4 l3">
          <img src={LogoLocation} alt="location icon" width="10%" /> Tacoma, WA
          <br />
          <br />
          <img src={LogoGraduation} alt="graduation icon" width="10%" /> June
          2016
        </div>
      </div>
    </div>
  );
}
