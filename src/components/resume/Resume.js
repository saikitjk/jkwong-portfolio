import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TechnicalSkill from "./TechnicalSkill";
import Education from "./Education";
import Experience from "./Experience";

export default function Resume() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container resumeContainer ">
      <div className="row resumeRow">
        <div className="col-lg-12 resumeCard">
          <TechnicalSkill />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}
