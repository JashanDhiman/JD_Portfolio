import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  const [openLink, setOpenLink] = useState(true);
  //const handleOpenlinks = () => {};

  return (
    <div className="navbar">
      {openLink ? (
        <>
          <div className="heading">
            <span>JD-Portfolio</span>
          </div>
          <div className="openLinks pointer" onClick={() => setOpenLink(false)}>
            <GoThreeBars />
          </div>
        </>
      ) : (
        <div className="l_Icons">
          <div id="cross" className="pointer" onClick={() => setOpenLink(true)}>
            <ImCross />
          </div>
          <a href="/">Resume</a>
          <a href="/">AboutMe</a>
          <a href="/">Testimonial</a>
          <a href="/">ContactMe</a>
          <a href="/">
            <AiFillInstagram />
          </a>
          <a href="/">
            <AiFillGithub />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
