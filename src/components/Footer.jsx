import React from "react";
import { Label } from "@/components/ui/label";
import logo from "../assets/vault_white.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
const Footer = () => {
  return (
    <footer className="h-[400px] w-full flex flex-col  bg-blue-900">
      <div className="h-full w-full flex items-center gap-2 px-50 xl:px-60">
        <div className="h-full w-max text-nowrap flex flex-col justify-center">
          <div className="h-max w-full flex gap-2 items-center">
            <img src={logo} alt="Company Logo" className="h-[30px]" />
            <Label className="text-2xl font-semibold text-white">
              My Private Vault
            </Label>
          </div>
          <Label className="text-gray-300 ml-9 text-xs">
            Secure your mortgage journey.
          </Label>
          <div className="h-[20px] w-max flex gap-5 ml-9 mt-5">
            <img src={twitter} alt="twitter" className="h-full w-full" />
            <img src={linkedin} alt="twitter" className="h-full w-full" />
            <img src={instagram} alt="twitter" className="h-full w-full" />
            <img src={facebook} alt="twitter" className="h-full w-full" />
          </div>
        </div>
        <div className="h-max w-full flex flex-col gap-5">
          <ul className="text-gray-300 flex gap-20 text-nowrap h-max w-full justify-center">
            <li>Dashboard</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Pricing</li>
            <li>Security</li>
          </ul>
          <ul className="text-gray-300 flex gap-20 text-nowrap h-max w-full justify-center">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
      <div className="text-gray-400 h-[150px] justify-center items-center w-full flex flex-col gap-2 px-50 xl:px-60 bg-blue-950">
        <Label>© 2025 MyPrivateVault. All rights reserved.</Label>
        <Label>NMLS ID #123456</Label>
      </div>
    </footer>
  );
};

export default Footer;
