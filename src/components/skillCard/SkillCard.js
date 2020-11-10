import React from "react";

//object destructuring first
const SkillCard = (props) => (
  <div className="col-lg-6">
    <div className="skillCard">
      <img src={props.SkillIcon} alt="skillIcon" className="skillCardIcon" />
      <div className="skillCardBody">
        <div className="skillCardTitle">{props.skillTitle}</div>
        <div className="skillCardDesc">{props.skillDesc}</div>
      </div>
    </div>
  </div>
);

export default SkillCard;
