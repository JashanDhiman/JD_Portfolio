import React from "react";
import { BsTelephone } from "react-icons/bs";
import { BiEnvelope, BiMap, BiSend } from "react-icons/bi";

const Contactme = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Contact Me</h2>
      <span className="section_subtitle">Get in Touch</span>
      <div className="contact_container container grid">
        <div>
          <div className="contact_information">
            <i className="r_icons contact_icon">
              <BsTelephone />
            </i>
            <div>
              <h3 className="contact_title">Call Me</h3>
              <span className="contact_subtitle">987-207-6386</span>
            </div>
          </div>
          <div className="contact_information">
            <i className="r_icons contact_icon">
              <BiEnvelope />
            </i>
            <div>
              <h3 className="contact_title">Email</h3>
              <span className="contact_subtitle">
                dhimanjashan.nirvana@gmail.com
              </span>
            </div>
          </div>
          <div className="contact_information">
            <i className="r_icons contact_icon">
              <BiMap />
            </i>
            <div>
              <h3 className="contact_title">Location</h3>
              <span className="contact_subtitle">India - Chandigarh</span>
            </div>
          </div>
        </div>
        <form action="" className="contact_from grid">
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label htmlFor="" className="contact_label">
                Name
              </label>
              <input type="text" className="contact_input" />
            </div>
            <div className="contact_content">
              <label htmlFor="" className="contact_label">
                Email
              </label>
              <input type="text" className="contact_input" />
            </div>
            <div className="contact_content">
              <label htmlFor="" className="contact_label">
                Project
              </label>
              <input type="text" className="contact_input" />
            </div>
            <div className="contact_content">
              <label htmlFor="" className="contact_label">
                Message
              </label>
              <textarea
                name=""
                id=""
                cols="0"
                rows="7"
                className="contact_input"
              />
            </div>
            <div>
              <a href="/" className="button button-flex">
                Send Message
                <i className="r_icons button_icon">
                  <BiSend />
                </i>
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactme;
