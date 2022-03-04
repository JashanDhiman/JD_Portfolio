import React from "react";
import { FaGraduationCap, FaRegCalendarAlt } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { useState } from "react/cjs/react.development";

const Qualification = () => {
  const [work, setwork] = useState(true);
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personal Journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={`qualification_button button--flex ${
              work ? "active" : null
            }`}
            onClick={() => setwork(true)}
          >
            <i className="r_icons qualification_icon">
              <FaGraduationCap />
            </i>
            Education
          </div>
          <div
            className={`qualification_button button--flex ${
              work ? null : "active"
            }`}
            onClick={() => setwork(false)}
          >
            <i className="r_icons qualification_icon">
              <BsBriefcase />
            </i>
            Work
          </div>
        </div>
        <div className="qualifiction_sections">
          {work ? (
            <div className="qualification_content">
              <div className="qualification_data">
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div>
                  <h3 className="qualification_title">
                    Information Technology
                  </h3>
                  <span className="qualification_subtitle">
                    UIET - Hoshiarpur
                  </span>
                  <div className="qualification_calendar">
                    <i className="r_icons qualification_icon">
                      <FaRegCalendarAlt />
                    </i>
                    2019 - 2022
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="qualification_content">
              <div className="qualification_data">
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div>
                  <h3 className="qualification_title">React</h3>
                  <span className="qualification_subtitle">
                    CueBlocks - Mohali
                  </span>
                  <div className="qualification_calendar">
                    <i className="r_icons qualification_icon">
                      <FaRegCalendarAlt />
                    </i>
                    Working
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
