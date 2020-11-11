import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

export default function ProjectCard({
  project: { title, snapShot, desc, demoURL, githubURL },
}) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="projectCard col-md-6 col-lg-4">
      <div className="projectCard" data-aos="flip-left">
        <div className="card_wrapper">
          <img
            className="card-img-top snapshot"
            alt="project Snapshot"
            src={snapShot}
          ></img>
          <div className="card-body projectBody">
            <div className="card-title projectTitle">{title}</div>
            <p className="card-text projectDesc">{desc}</p>
            <div className="card-action">
              <a href={demoURL} target="_blank" class="card-link demoLink">
                Go
              </a>
              <a href={githubURL} target="_blank" class="card-link repoLink">
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="projectCard col-md-6 col-lg-4">
// <div className="card_wrapper">
//   <div className="snapShot">
//     <img src={snapShot} alt={title} className="snapshot" />
//   </div>
//   <div className="projectTitle">
//     <a
//       href={githubURL}
//       target="_blank"
//       class="btn btn-link"
//       role="button"
//     >
//       Repo
//     </a>
//     {title}
//     <a href={demoURL} target="_blank" class="btn btn-link" role="button">
//       Demo
//     </a>
//   </div>
// </div>
// </div>
