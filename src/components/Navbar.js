import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";

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
          {/*<div className="links">*/}
          <div className="openLinks" onClick={() => setOpenLink(false)}>
            <GoThreeBars />
          </div>
        </>
      ) : (
        <div className="l_Icons">
          <div id="cross" onClick={() => setOpenLink(true)}>
            <ImCross />
          </div>
          <a href="/">Resume</a>
          <a href="/">AboutMe</a>
          <a href="/">Testimonial</a>
          <a href="/">ContactMe</a>
        </div>
        //</div>
      )}
    </div>
  );
};

export default Navbar;
