import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectData from "../utils/projectData";
import ProjectCard from "../projects/ProjectCard";
import "./style.css";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container projectContainer">
      <div className="row projectRow">
        {ProjectData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
