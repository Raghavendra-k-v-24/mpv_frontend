import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import Section_4 from "./Section_4";
import Section_5 from "./Section_5";
import Section_6 from "./Section_6";
import Section_7 from "./Section_7";
import Section_8 from "./Section_8";
import Section_9 from "./Section_9";

const Sections = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const sections = [
    "Section 1",
    "Section 2",
    "Section 3",
    "Section 4",
    "Section 5",
    "Section 6",
    "Section 7",
    "Section 8",
    "Section 9",
  ];
  const sectionComponents = [
    <Section_1 />,
    <Section_2 />,
    <Section_3 />,
    <Section_4 />,
    <Section_5 />,
    <Section_6 />,
    <Section_7 />,
    <Section_8 />,
    <Section_9 />,
  ];
  const handleNext = () => {
    if (currentStep < sections.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  return (
    <div className="flex-1 w-full flex flex-col items-center gap-3">
      <ul className="steps text-xs w-[900px] h-max">
        {sections.map((label, index) => (
          <li
            key={index}
            className={`step ${index <= currentStep ? "step-accent" : ""}`}
          >
            {label}
          </li>
        ))}
      </ul>
      <div className="flex-1 w-full flex justify-center">
        {sectionComponents[currentStep]}
      </div>
      <div className="flex gap-4">
        <Button
          variant=""
          className="w-[80px]"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        <Button
          variant=""
          className={`w-[80px] ${
            currentStep === sections.length - 1
              ? "bg-indigo-900 hover:bg-indigo-800"
              : "bg-black"
          }`}
          onClick={handleNext}
        >
          {currentStep === sections.length - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default Sections;
