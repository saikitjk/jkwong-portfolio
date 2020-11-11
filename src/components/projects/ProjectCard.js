import React from "react";
import "./style.css";

export default function ProjectCard({
  project: { title, snapShot, desc, demoURL, githubURL },
}) {
  return (
    <div className="projectCard col-md-6 col-lg-4">
      <div className="projectCard" data-aos="zoom-in-up">
        <div className="card_wrapper">
          <img
            className="card-img-top"
            alt="project Snapshot"
            src={snapShot}
          ></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <div className="card-action">
              <a href={demoURL} target="_blank" class="card-link">
                Go
              </a>
              <a href={githubURL} target="_blank" class="card-link">
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
