import React from "react";
import { Label } from "@/components/ui/label";

const BenifitInfo = ({ information }) => {
  return (
    <div className="h-max w-full flex gap-2">
      <div className="w-8 h-8 bg-green-700 rounded-full flex justify-center items-center">
        <Label className="text-white">✓</Label>
      </div>
      <Label className="text-xl text-blue-900 font-semibold">
        {information}
      </Label>
    </div>
  );
};

export default BenifitInfo;
