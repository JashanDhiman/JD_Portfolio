import React, { useState } from "react";
//import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { FaBrain, FaUserGraduate } from "react-icons/fa";
//import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BiHomeAlt, BiSend } from "react-icons/bi";
import { AiOutlineUser, AiOutlineAppstore } from "react-icons/ai";
import {
  //BsBriefcase,
  //BsReverseLayoutTextSidebarReverse,
  BsSun,
  BsMoon,
} from "react-icons/bs";

const Navbar = () => {
  var activeID = window.location.hash;
  var darkThemeVal =
    localStorage.getItem("darkTheme") === "true" ? true : false;
  document.body.classList[darkThemeVal ? "add" : "remove"]("dark-theme");
  const [showNav, setShowNav] = useState(false);
  const [darkTheme, setDarkTheme] = useState(darkThemeVal);
  const themeHandler = (bool) => {
    setDarkTheme(bool);
    localStorage.setItem("darkTheme", bool);
  };
  /*==================== REMOVE MENU MOBILE ====================*/
  const width = window.innerWidth;
  function linkAction() {
    setShowNav(false);
  }
  const navItems = [
    { title: "home", icon: <BiHomeAlt /> },
    { title: "about", icon: <AiOutlineUser /> },
    { title: "skills", icon: <FaBrain /> },
    { title: "qualification", icon: <FaUserGraduate /> },
    { title: "", icon: "" }, //{ title: "Resume", icon: <BsReverseLayoutTextSidebarReverse /> },
    { title: "contact", icon: <BiSend /> },
  ];
  return (
    <header className="header" id="header">
      {width < 768 ? (
        showNav ? (
          <div className="nav_menu" id="nav-Menu">
            <ul className="nav_list grid">
              {navItems.map((item, index) => {
                return (
                  <li className="nav_item" key={index}>
                    <a
                      href={`#${item.title}`}
                      className="nav_link"
                      style={{
                        color:
                          activeID === `#${item.title}`
                            ? "var(--first-color)"
                            : "",
                      }}
                      onClick={() => linkAction()}
                    >
                      <i className="nav_icon r_icons">{item.icon}</i>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <i
              className="nav_close r_icons"
              id="nav-Close"
              onClick={() => setShowNav(false)}
            >
              <ImCross />
            </i>
          </div>
        ) : (
          <nav className="nav container">
            <a href="/" className="nav_logo">
              JD
            </a>
            <div className="nav_btns">
              {darkTheme ? (
                <i
                  className="change-theme r_icons"
                  id="theme-button"
                  onClick={() => themeHandler(false)}
                >
                  <BsMoon />
                </i>
              ) : (
                <i
                  className="change-theme r_icons"
                  id="theme-button"
                  onClick={() => themeHandler(true)}
                >
                  <BsSun />
                </i>
              )}
              <div
                className="nav_toggle r_icons"
                id="nav-Toggle"
                onClick={() => setShowNav(true)}
              >
                <AiOutlineAppstore />
              </div>
            </div>
          </nav>
        )
      ) : (
        <div className="nav_menu" id="nav-Menu">
          <a href="/" className="nav_logo">
            JD
          </a>
          <ul className="nav_list grid">
            {navItems.map((item, index) => {
              return (
                <li className="nav_item" key={index}>
                  <a
                    href={`#${item.title}`}
                    className="nav_link"
                    style={{
                      color:
                        activeID === `#${item.title}`
                          ? "var(--first-color)"
                          : "",
                    }}
                    onClick={() => linkAction()}
                  >
                    <i className="nav_icon r_icons">{item.icon}</i>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="nav_btns">
            {darkTheme ? (
              <i
                className="change-theme r_icons"
                id="theme-button"
                onClick={() => themeHandler(false)}
              >
                <BsMoon />
              </i>
            ) : (
              <i
                className="change-theme r_icons"
                id="theme-button"
                onClick={() => themeHandler(true)}
              >
                <BsSun />
              </i>
            )}
            <div
              className="nav_toggle r_icons"
              id="nav-Toggle"
              onClick={() => setShowNav(true)}
            >
              <AiOutlineAppstore />
            </div>
          </div>
        </div>
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
