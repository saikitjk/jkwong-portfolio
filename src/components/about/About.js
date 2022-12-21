import React from "react";
import Intro from "./Intro";
import LogoReact from "../../assets/images/react.png";
import LogoJavascript from "../../assets/images/javascript.png";
import LogoHTML from "../../assets/images/html.png";
import LogoCSS from "../../assets/images/css.png";
import LogoPowerShell from "../../assets/images/powershell.jpg";
import LogoMySQL from "../../assets/images/mysql.png";
import LogoMongo from "../../assets/images/mongo.png";
import LogoNode from "../../assets/images/node.png";
import LogoJQuery from "../../assets/images/jquery.png";
import "./aboutStyle.css";
import SkillCard from "../skillCard/SkillCard";

export default function About() {
  const skills = [
    {
      skillIcon: LogoReact,
      skillTitle: "React",
      skillDesc: "",
    },
    {
      skillIcon: LogoJavascript,
      skillTitle: "Javascript",
      skillDesc: "",
    },
    {
      skillIcon: LogoHTML,
      skillTitle: "HTML",
      skillDesc: "",
    },
    {
      skillIcon: LogoCSS,
      skillTitle: "CSS",
      skillDesc: "",
    },
    {
      skillIcon: LogoNode,
      skillTitle: "Node.js",
      skillDesc: "",
    },
    {
      skillIcon: LogoJQuery,
      skillTitle: "JQuery",
      skillDesc: "",
    },
    {
      skillIcon: LogoMongo,
      skillTitle: "MongoDB",
      skillDesc: "",
    },
    {
      skillIcon: LogoMySQL,
      skillTitle: "MySQL",
      skillDesc: "",
    },
    {
      skillIcon: LogoPowerShell,
      skillTitle: "PowerShell",
      skillDesc: "",
    },
  ];
  return (
    <div className="about">
      <Intro />

      <div className="container">
        <h6 className="listTitle">Tech I use</h6>
        <div className="row">
          {skills.map((props, idx) => (
            <SkillCard
              key={idx}
              icon={props.skillIcon}
              title={props.skillTitle}
              desc={props.skillDesc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
