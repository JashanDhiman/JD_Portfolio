import React from "react";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="heading">
        <span>JD-Portfolio</span>
      </div>
      <div className="links">
        <div className="openLinks">
          <GoThreeBars />
        </div>
        <div className="l_Icons">
          <a href="/">Home</a>
          <a href="/">Resume</a>
          <a href="/">AboutMe</a>
          <a href="/">Testimonial</a>
          <a href="/">ContactMe</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
