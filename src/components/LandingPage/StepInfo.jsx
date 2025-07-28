import React from "react";
import { Label } from "@/components/ui/label";

const StepInfo = ({ stepNumber, stepInformation }) => {
  return (
    <div className="h-max flex-1 flex flex-col gap-3 items-center text-center">
      <div className="w-10 h-10 bg-blue-900 rounded-full flex justify-center items-center">
        <Label className="text-white">{stepNumber}</Label>
      </div>
      <Label className="text-xl">{stepInformation}</Label>
    </div>
  );
};

export default StepInfo;
