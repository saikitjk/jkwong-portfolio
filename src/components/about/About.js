import React from "react";
import Intro from "./Intro";
import ReactLogo from "../../assets/images/react.png";
import Javascript from "../../assets/images/javascript.png";

export default function About() {
  const skills = [
    {
      skillIcon: ReactLogo,
      skillTitle: "React",
      skillDesc: null,
    },
    {
      skillIcon: Javascript,
      skillTitle: "Javascript",
      skillDesc: null,
    },
  ];
  return (
    <div className="about">
      <h6>
        <Intro />
      </h6>
      <div className="container myGiveList">
        <h6 className="listTitle">Tech I use</h6>
        <div className="row">{}</div>
      </div>
    </div>
  );
}
