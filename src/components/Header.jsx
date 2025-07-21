import React from "react";
import logo from "../assets/logo_white.png";

const Header = () => {
  return (
    <div className="h-[50px] w-full bg-black px-3 py-2.5 flex items-center">
      <img src={logo} alt="Company Logo" className="h-full w-max" />
    </div>
  );
};

export default Header;
