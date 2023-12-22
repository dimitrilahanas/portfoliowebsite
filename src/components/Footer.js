import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Resume from "../media/resume.pdf";

function Footer() {
  return (
    <footer>
        <div className="resumeBtn">
            <a href={Resume}>Resume</a>
        </div>
        <div className="socialIcons">
          <p className="email">dimitrilahanas@gmail.com</p>
          <a href="https://www.instagram.com/dimitrilahanas/"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
          <a href="https://github.com/dimitrilahanas"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
        </div>
    </footer>
  );
}

export default Footer;
