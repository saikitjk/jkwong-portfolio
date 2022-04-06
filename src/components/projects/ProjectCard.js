import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
          {/* <div
            className="card_name_img"
            data-tip={desc}
            data-for="descPopup"
            data-delay-show={250}
            data-border={true}
            data-type="light"
          > */}
          <img
            className="card-img-top snapshot"
            alt="project Snapshot"
            src={snapShot}
          ></img>

          <div className="card-title projectTitle">{title}</div>
          {/* <ReactTooltip
              className="descPopup"
              id="descPopup"
              place="top"
              effect="solid"
              data-html="true"
              insecure="true"
              data-multiline="true"
            /> */}
        </div>

        <div className="card-action projectAction">
          <a href={demoURL} className="demoLink">
            <i className="playCircleIcon">
              <FontAwesomeIcon icon={faLink} />
            </i>
          </a>

          <a href={githubURL} className=" repoLink">
            <i className="gitCatIcon">
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>

          <i
            className="card_name_img"
            data-tip={desc}
            data-for="descPopup"
            data-delay-show={250}
            data-border={true}
            data-type="light"
          >
            <i className="infoIcon">
              <FontAwesomeIcon icon={faInfoCircle} />
            </i>

            <ReactTooltip
              className="descPopup"
              id="descPopup"
              place="top"
              effect="solid"
              data-html="true"
              insecure="true"
              data-multiline="true"
            />
          </i>
        </div>
      </div>
    </div>
  );
}
