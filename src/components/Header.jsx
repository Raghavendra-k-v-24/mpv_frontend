import React from "react";
import logo from "../assets/vault.png";
import profile from "../assets/profile.png";
import { Label } from "@/components/ui/label";

const Header = () => {
  return (
    <header className="min-h-[50px] w-full flex items-center justify-between px-50 xl:px-60">
      <div className="h-full w-max flex gap-2 items-center">
        <img src={logo} alt="Company Logo" className="h-[30px]" />
        <Label className="text-2xl font-semibold text-blue-900">
          My Private Vault
        </Label>
      </div>
      <ul className="h-full w-max flex gap-9 text-md text-gray-400 items-center">
        <li>Home</li>
        <li>About</li>
        <li>FAQs</li>
        <li>Contact</li>
        <li className="h-[28px] w-[28px]">
          <img src={profile} alt="Company Logo" className="h-full" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
