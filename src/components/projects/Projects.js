import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectData from "../utils/projectData";
import ProjectCard from "../projects/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const filterIcon = <FontAwesomeIcon icon={faFilter} />;

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
      <header className="headerContainer">
        <div className="row projectIndex">
          <div className="sortBy">
            <span>
              <i className="filterIcon">{filterIcon}</i>
            </span>
          </div>
          <div
            className="filterObj"
            onClick={() => setProjectState(ProjectData)}
          >
            All
          </div>
          <div className="filterObj" onClick={() => filterCategory("React")}>
            React
          </div>
          <div
            className="filterObj"
            onClick={() => filterCategory("FullStack")}
          >
            Full Stack
          </div>
          <div className="filterObj" onClick={() => filterCategory("Frontend")}>
            Frontend
          </div>
          <div className="filterObj" onClick={() => filterCategory("Backend")}>
            Backend
          </div>
          <div className="filterObj" onClick={() => filterCategory("Nodejs")}>
            Nodejs
          </div>
        </div>
      </header>
      <div className="container projectContainer">
        <div className="row projectRow">
          {project.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
