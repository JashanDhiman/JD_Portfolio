import React, { useState } from "react";
//import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";
//import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BiHomeAlt, BiSend } from "react-icons/bi";
import { AiOutlineUser, AiOutlineAppstore } from "react-icons/ai";
import { BsBriefcase, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  /*==================== REMOVE MENU MOBILE ====================*/
  //const width = window.innerWidth;
  function linkAction() {
    setShowNav(false);
  }
  return (
    <header className="header" id="header">
      {showNav ? (
        <div className="nav_menu" id="nav-Menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link" onClick={() => linkAction()}>
                <i className="nav_icon">
                  <BiHomeAlt />
                </i>
                Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                className="nav_link"
                onClick={() => linkAction()}
              >
                <i className="nav_icon">
                  <AiOutlineUser />
                </i>
                About
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#resume"
                className="nav_link"
                onClick={() => linkAction()}
              >
                <i className="nav_icon">
                  <BsReverseLayoutTextSidebarReverse />
                </i>
                Resume
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#services"
                className="nav_link"
                onClick={() => linkAction()}
              >
                <i className="nav_icon">
                  <BsBriefcase />
                </i>
                Services
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#contact"
                className="nav_link"
                onClick={() => linkAction()}
              >
                <i className="nav_icon">
                  <BiSend />
                </i>
                ContactMe
              </a>
            </li>
          </ul>
          <i
            className="nav_close"
            id="nav-Close"
            onClick={() => setShowNav(false)}
          >
            <ImCross />
          </i>
        </div>
      ) : (
        <nav className="nav container">
          <a href="/" className="nav_logo">
            Jashan
          </a>
          <div className="nav_btns">
            <div
              className="nav_toggle"
              id="nav-Toggle"
              onClick={() => setShowNav(true)}
            >
              <AiOutlineAppstore />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

//<div classNameName="navbar">
//  {openLink ? (
//    <>
//      <div classNameName="heading">
//        <span>JD-Portfolio</span>
//      </div>
//      <div classNameName="openLinks pointer" onClick={() => setOpenLink(false)}>
//        <GoThreeBars />
//      </div>
//    </>
//  ) : (
//    <div classNameName="l_Icons">
//      <div id="cross" classNameName="pointer" onClick={() => setOpenLink(true)}>
//        <ImCross />
//      </div>
//      <a href="/">Resume</a>
//      <a href="/">AboutMe</a>
//      <a href="/">Testimonial</a>
//      <a href="/">ContactMe</a>
//      <a href="/">
//        <AiFillInstagram />
//      </a>
//      <a href="/">
//        <AiFillGithub />
//      </a>
//    </div>
//  )}
//</div>
