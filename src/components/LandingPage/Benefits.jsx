import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Form from "../../assets/1003_Form.jpg";
import BenifitInfo from "./BenifitInfo";
const Benefits = () => {
  return (
    <section className="h-max w-full flex px-50 xl:px-60 py-10 justify-between items-center bg-blue-50 overflow-auto ">
      <div className="h-full w-full flex flex-col items-center gap-2">
        <Label className="text-2xl font-semibold text-blue-900">
          1003 Mortgage Application Form
        </Label>
        <div className="h-[320px] w-full flex overflow-auto shadow-xl/60 shadow-blue-900 rounded-md">
          <img
            src={Form}
            alt="Company Logo"
            className="h-max w-max overflow-auto "
          />
        </div>
        <Label className="text-xs font-semibold mt-3 text-blue-900">
          Don't have the form?
          <a
            href="/1003_Application_Form.pdf"
            download
            className="text-xs font-bold underline underline-offset-2"
          >
            Click here
          </a>
        </Label>
      </div>
      <div className="h-full w-full flex justify-center">
        <div className="h-full w-max flex flex-col gap-5">
          <Label className="text-3xl font-semibold text-blue-900">
            Why Choose Us
          </Label>
          <div className="h-full w-max flex flex-col gap-3">
            <BenifitInfo information={"Secure & Encrypted Submissions"} />
            <BenifitInfo information={"Fast Pre-Qualification"} />
            <BenifitInfo information={"Trusted by 10,000+ Homebuyers"} />
            <BenifitInfo information={"Personalized Loan Support"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
