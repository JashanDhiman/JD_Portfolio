import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_bg">
        <div className="footer_container conainer grid">
          <div>
            <h1 className="footer_title">Jashan D.</h1>
            <span className="footer_subtitle">Web Developer</span>
          </div>
          <ul className="footer_links">
            <li>
              <a href="#services" className="footer_link">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="footer_link">
                Contact Me
              </a>
            </li>
          </ul>
          <div className="footer_socials">
            <a
              href="https://github.com/JashanDhiman/"
              target="_blank"
              rel="noreferrer"
              className="footer_social r_icons"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jashan-dhiman-07aa3820b/"
              target="_blank"
              rel="noreferrer"
              className="footer_social r_icons"
            >
              <ImLinkedin2 />
            </a>
            <a
              href="https://www.instagram.com/dhiman_jashan1/"
              target="_blank"
              rel="noreferrer"
              className="footer_social r_icons"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
