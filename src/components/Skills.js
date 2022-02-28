import React from "react";
import { BsBraces } from "react-icons/bs";
import { FaAngleDown, FaServer } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>
      <div className="skills_container container grid">
        <div>
          {/* ------------------------skill 1------------------ */}
          <div className="skills_content">
            <div className="skills_header">
              <i className="r_icons skills_icon">
                <BsBraces />
              </i>
              <div>
                <h1 className="skills_title">Frontend devloper</h1>
                <span className="skills_subtitle">About 1 year</span>
              </div>
              <i className="r_icons">
                <FaAngleDown />
              </i>
            </div>
            <div className="skills_list grid">
              <div className="skillsdata">
                <div className="skills_title">
                  <h3 className="skills_name">HTML</h3>
                  <span className="skills_number">60%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_html"></span>
                </div>
              </div>
              <div className="skillsdata">
                <div className="skills_title">
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_number">50%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_css"></span>
                </div>
              </div>
              <div className="skillsdata">
                <div className="skills_title">
                  <h3 className="skills_name">JavaScript</h3>
                  <span className="skills_number">40%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_js"></span>
                </div>
              </div>
              <div className="skillsdata">
                <div className="skills_title">
                  <h3 className="skills_name">React</h3>
                  <span className="skills_number">40%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_react"></span>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------skill 2------------------ */}
          <div className="skills_content">
            <div className="skills_header">
              <i className="r_icons skills_icon">
                <FaServer />
              </i>
              <div>
                <h1 className="skills_title">Backend devloper</h1>
                <span className="skills_subtitle">About 1 year</span>
              </div>
              <i className="r_icons">
                <FaAngleDown />
              </i>
            </div>
            <div className="skills_list grid">
              <div className="skillsdata">
                <div className="skills_title">
                  <h3 className="skills_name">HTML</h3>
                  <span className="skills_number">60%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_html"></span>
                </div>
              </div>
              <div className="skillsdata">
                <div className="skills_title">
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_number">50%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_css"></span>
                </div>
              </div>
              <div className="skillsdata">
                <div className="skills_title">
                  <h3 className="skills_name">JavaScript</h3>
                  <span className="skills_number">40%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_js"></span>
                </div>
              </div>
              <div className="skillsdata">
                <div className="skills_title">
                  <h3 className="skills_name">React</h3>
                  <span className="skills_number">40%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage skills_react"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
