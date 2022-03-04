import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiGithub, FiArrowDown } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { BiSend } from "react-icons/bi";
import { CgMouse } from "react-icons/cg";
import fav from "../styles/images/newimg.png";

const Front = () => {
  return (
    <div className="main">
      <section className="home section" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            <div className="home_social">
              <a
                href="https://github.com/JashanDhiman/"
                target="_blank"
                rel="noreferrer"
                className="home_social-icon r_icons"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jashan-dhiman-07aa3820b/"
                target="_blank"
                rel="noreferrer"
                className="home_social-icon r_icons"
              >
                <ImLinkedin2 />
              </a>
              <a
                href="https://www.instagram.com/dhiman_jashan1/"
                target="_blank"
                rel="noreferrer"
                className="home_social-icon r_icons"
              >
                <BsInstagram />
              </a>
            </div>
            <div className="home_img">
              <svg
                className="home_blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    className="home_blob-img"
                    x="10"
                    y="-15"
                    href={fav}
                    alt="fav"
                  />
                </g>
              </svg>
            </div>
            <div className="home_data">
              <h1 className="home_title">Hi, I'am JD</h1>
              <h3 className="home_subtitle">Web Developer</h3>
              <p className="home_description">
                One year experience in Web Design and Knowledge, Producing
                Quality Work.
              </p>
              <a href="#contact" className="button button-flex">
                Contact Me
                <i className="button_icon r_icons">
                  <BiSend />
                </i>
              </a>
            </div>
          </div>
          <div className="home_scroll">
            <a href="#about" className="home_scroll-button button-flex">
              <i className="home_scroll-mouse r_icons">
                <CgMouse />
              </i>
              <span className="home_scroll-name">Scroll down</span>
              <i className="home_scroll-arrow r_icons">
                <FiArrowDown />
              </i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Front;
