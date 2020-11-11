import React from "react";
import ProjectData from "../utils/projectData";

export default function Projects() {
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
