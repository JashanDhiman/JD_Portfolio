import React from "react";
import { BsBraces } from "react-icons/bs";
import { FaAngleDown, FaServer } from "react-icons/fa";
import { useState } from "react/cjs/react.development";

const Skills = () => {
  const [frontEndSkills, setFrontEndSkills] = useState(true);
  const [backEndSkills, setBackEndSkills] = useState(false);

  const front_skills_list = [
    { skill: "HTML", percentage: "60%" },
    { skill: "CSS", percentage: "50%" },
    { skill: "JavaScript", percentage: "40%" },
    { skill: "React", percentage: "40%" },
  ];
  const back_skills_list = [
    { skill: "Python", percentage: "50%" },
    { skill: "Firebase", percentage: "40%" },
    { skill: "Django", percentage: "40%" },
  ];
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>
      <div className="skills_container container grid">
        <div>
          {/* ------------------------skill 1------------------ */}
          <div
            className={`skills_content ${
              frontEndSkills ? "skills_open" : "skills_close"
            }`}
          >
            <div
              className="skills_header"
              onClick={() => setFrontEndSkills(frontEndSkills ? false : true)}
            >
              <i className="r_icons skills_icon">
                <BsBraces />
              </i>
              <div>
                <h1 className="skills_title">Frontend devloper</h1>
                <span className="skills_subtitle">Around 1 year</span>
              </div>
              <i className="r_icons skills_arrow">
                <FaAngleDown />
              </i>
            </div>
            <div className="skills_list grid">
              {front_skills_list.map((skill, index) => {
                return (
                  <div className="skillsdata" key={index}>
                    <div className="skills_titles">
                      <h3 className="skills_name">{skill.skill}</h3>
                      <span className="skills_number">{skill.percentage}</span>
                    </div>
                    <div className="skills_bar">
                      <span
                        className="skills_percentage skills_html"
                        style={{ width: `${skill.percentage}` }}
                      ></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ------------------------skill 2------------------ */}
          <div
            className={`skills_content ${
              backEndSkills ? "skills_open" : "skills_close"
            }`}
          >
            <div
              className="skills_header"
              onClick={() => setBackEndSkills(backEndSkills ? false : true)}
            >
              <i className="r_icons skills_icon">
                <FaServer />
              </i>
              <div>
                <h1 className="skills_title">Backend devloper</h1>
                <span className="skills_subtitle">Around 1 year</span>
              </div>
              <i className="r_icons skills_arrow">
                <FaAngleDown />
              </i>
            </div>
            <div className="skills_list grid">
              {back_skills_list.map((skill, index) => {
                return (
                  <div className="skillsdata" key={index}>
                    <div className="skills_titles">
                      <h3 className="skills_name">{skill.skill}</h3>
                      <span className="skills_number">{skill.percentage}</span>
                    </div>
                    <div className="skills_bar">
                      <span
                        className="skills_percentage skills_html"
                        style={{ width: `${skill.percentage}` }}
                      ></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
