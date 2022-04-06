import React from "react";
import "./style.css";

//object destructuring first
const SkillCard = (props) => (
  <div className="col-lg-4">
    <div className="skillCard">
      <img src={props.icon} alt="skillIcon" className="skillCardIcon" />
      <div className="skillCardBody">
        <h6 className="skillCardTitle">{props.title}</h6>
        <p className="skillCardDesc">{props.desc}</p>
      </div>
    </div>
  </div>
);

export default SkillCard;
