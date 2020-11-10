import React from "react";
import Intro from "./Intro";
import LogoReact from "../../assets/images/react.png";
import LogoJavascript from "../../assets/images/javascript.png";
import "./aboutStyle.css";
import SkillCard from "../skillCard/SkillCard";

export default function About() {
  const skills = [
    {
      skillIcon: LogoReact,
      skillTitle: "React",
      skillDesc: "vs",
    },
    {
      skillIcon: LogoJavascript,
      skillTitle: "Javascript",
      skillDesc: "",
    },
  ];
  return (
    <div className="about">
      <h6>
        <Intro />
      </h6>
      <div className="container myGiveList">
        <h6 className="listTitle">Tech I use</h6>
        <div className="row">
          {skills.map((props) => (
            <SkillCard skill={props} />
          ))}
        </div>
      </div>
    </div>
  );
}
