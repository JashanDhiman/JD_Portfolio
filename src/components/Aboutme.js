import React from "react";
import resume from "../styles/images/New Resume.pdf";
import main_img from "../styles/images/fav.jpeg";
import { FiDownload } from "react-icons/fi";

const Aboutme = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Introduction</span>

      <div className="about_container container grid">
        <img src={main_img} alt="" className="about_img" />
        <div className="about_data">
          <p className="about_description">
            Web developer, with extensive knowledge and 1 year of experience,
            working in web technologies and consistently learning and upgrading
            my the skills.
          </p>
          <div className="about_info">
            <div>
              <span className="about_info-title">01+</span>
              <span className="about_info-name">Years experience</span>
            </div>
            <div>
              <span className="about_info-title">04</span>
              <span className="about_info-name">Completed project</span>
            </div>
            {/*<div>
              <span className="about_info-title">01</span>
              <span className="about_info-name">Companies worked</span>
            </div>*/}
          </div>
          <div className="about_buttons">
            <a download={resume} href={resume} className="button button-flex">
              Download CV
              <i className="r_icons button_icon">
                <FiDownload />
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
