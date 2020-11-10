import React from "react";
import "./style.css";

//object destructuring first
const SkillCard = (props) => (
  <div className="col-lg-6">
    <div className="skillCard">
      <img src={props.SkillIcon} alt="skillIcon" className="skillCardIcon" />
      <div className="skillCardBody">
        <h6 className="skillCardTitle">{props.skillTitle}</h6>
        <p className="skillCardDesc">{props.skillDesc}</p>
      </div>
    </div>
  </div>
);

export default SkillCard;
