import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const playCircleIcon = <FontAwesomeIcon icon={faPlayCircle} />;

export default function ProjectCard({
  project: { title, snapShot, desc, demoURL, githubURL },
}) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="projectCard col-md-6 col-lg-4">
      <div className="projectCard">
        <div className="card_wrapper">
          <div
            className="card_name_img"
            data-tip={desc}
            data-delay-show={250}
            data-border={true}
          >
            <img
              className="card-img-top snapshot"
              alt="project Snapshot"
              src={snapShot}
            ></img>

            <div className="card-title projectTitle">{title}</div>
          </div>

          <ReactTooltip
            className="descPopup"
            place="top"
            type="light"
            effect="solid"
          />

          <div className="card-action projectAction">
            <a href={demoURL} class="card-link demoLink">
              <span>
                <i className="playCircleIcon">{playCircleIcon}</i>
              </span>
            </a>
            <a href={githubURL} class="card-link repoLink">
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

//            <p className="card-text projectDesc">{desc}</p>
