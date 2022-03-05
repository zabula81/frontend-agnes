import React from "react";
import "./SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointRight,
  faHandPointLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faCodepen,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
function SocialMedia() {
  return (
    <div className="socialmedia">
      <div className="socialmedia__left">
        <FontAwesomeIcon icon={faHandPointRight} />
      </div>
      <div className="socialmedia__container">
        <div className="socialmedia__github">
          <a href="https://github.com/frontendagnes">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
        <div className="socialmedia__codepen">
          <a href="https://codepen.io/agnieszka-kamiska">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </div>
        <div className="socialmedia__facebook">
          <a href="https://www.facebook.com/agnieszka.kaminska.5245/">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </div>
      </div>
      <div className="socialmedia__right">
        <FontAwesomeIcon icon={faHandPointLeft} />
      </div>
    </div>
  );
}

export default SocialMedia;
