import React from "react";
//import { GoThreeBars } from "react-icons/go";
//import { ImCross } from "react-icons/im";
//import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BiHomeAlt, BiSend } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsBriefcase, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

const Navbar = () => {
  return (
    <header class="header" id="header">
      <nav class="nav container">
        <a href="/" class="nav_logo">
          Jashan
        </a>
        <div class="nav_menu" id="nav-Menu">
          <ul class="nav_list grid">
            <li class="nav_item">
              <a href="#home" class="nav_link">
                <BiHomeAlt />
                Home
              </a>
            </li>
            <li class="nav_item">
              <a href="#about" class="nav_link">
                <AiOutlineUser />
                About
              </a>
            </li>
            <li class="nav_item">
              <a href="#skills" class="nav_link">
                <BsReverseLayoutTextSidebarReverse />
                Skills
              </a>
            </li>
            <li class="nav_item">
              <a href="#services" class="nav_link">
                <BsBriefcase />
                Services
              </a>
            </li>
            {/*<li class="nav_item">
              <a href="#portfolio" class="nav_link">
                Portfolio
              </a>
            </li>*/}
            <li class="nav_item">
              <a href="#contact" class="nav_link">
                <BiSend />
                ContactMe
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav_close" id="nav-Close"></i>
        </div>
        <div class="nav_btns">
          <div class="nav_toggle" id="nav-Toggle">
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

//<div className="navbar">
//  {openLink ? (
//    <>
//      <div className="heading">
//        <span>JD-Portfolio</span>
//      </div>
//      <div className="openLinks pointer" onClick={() => setOpenLink(false)}>
//        <GoThreeBars />
//      </div>
//    </>
//  ) : (
//    <div className="l_Icons">
//      <div id="cross" className="pointer" onClick={() => setOpenLink(true)}>
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
