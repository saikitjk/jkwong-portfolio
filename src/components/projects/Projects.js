import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectData from "../utils/projectData";
import ProjectCard from "../projects/ProjectCard";

import "./style.css";

export default function Projects() {
  const [project, setProjectState] = useState(ProjectData);

  const filterCategory = (categoryName) => {
    const newDisplayProject = ProjectData.filter((project) =>
      project.category.includes(categoryName)
    );
    setProjectState(newDisplayProject);
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container projectContainer">
        <div className="row projectRow">
          {project.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
      <div className="footerContainer">
        <div className="row projectIndex">
          <div onClick={() => filterCategory("")}>All</div>
          <div onClick={() => filterCategory("React")}>React</div>
          <div onClick={() => filterCategory("MongoDB")}>MongoDB</div>
          <div onClick={() => filterCategory("MySQL")}>MySQL</div>
          <div onClick={() => filterCategory("Expressjs")}>Expressjs</div>
          <div onClick={() => filterCategory("Nodejs")}>Nodejs</div>
        </div>
      </div>
    </>
  );
}
