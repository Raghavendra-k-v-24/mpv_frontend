import React from "react";
import logo from "../assets/vault.png";
import profile from "../assets/profile.png";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="min-h-[50px] w-full flex items-center justify-between px-50 xl:px-60">
      <div
        className="h-full w-max flex gap-2 items-center cursor-pointer "
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="Company Logo"
          className="h-[30px] cursor-pointer"
        />
        <Label className="text-2xl font-semibold text-blue-900 cursor-pointer">
          My Private Vault
        </Label>
      </div>
      <ul className="h-full w-max flex gap-9 text-md text-gray-400 items-center cursor-pointer">
        <li onClick={() => navigate("/home")}>Home</li>
        <li>About</li>
        <li>FAQs</li>
        <li>Contact</li>
        <li className="h-[28px] w-[28px]" onClick={() => navigate("/login")}>
          <img src={profile} alt="Company Logo" className="h-full" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
