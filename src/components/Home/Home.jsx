import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import colors from "tailwindcss/colors";
import { Label } from "@/components/ui/label";
import FileUpload from "./FileUpload";
import { Input } from "@/components/ui/input";
import Section_1 from "./Section1";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [step, setStep] = useState(0);
  const [results, setResults] = useState({});
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10 px:50 lg:px-60 gap-3">
      <FileUpload setResults={setResults} />
      <Stepper
        activeStep={step}
        className="w-max"
        connectorStyleConfig={{
          activeColor: "black",
          completedColor: colors.yellow[500],
          size: 1,
          stepSize: "2em",
        }}
        styleConfig={{
          activeBgColor: "#1c398e",
          completedBgColor: "#162556",
          activeTextColor: "white",
          completedTextColor: colors.gray[300],
          size: "32px",
          circleFontSize: "12px",
          labelFontSize: "12px",
        }}
      >
        <Step label="Borrower Information" />
        <Step
          label={
            <>
              Financial Information
              <br />
              (Assets and Liabilities)
            </>
          }
        />
        <Step
          label={
            <>
              Financial Information
              <br />
              (Real Estate)
            </>
          }
        />
        <Step label="Loan and Property Information" />
        <Step label="Declarations" />
        <Step label="Acknowledgments and Agreements" />
        <Step label="Military Service" />
        <Step label="Demographic Information" />
        <Step label="Loan Originator Information" />
      </Stepper>
      <Section_1 results={results} setResults={setResults} />
      <div className="w-max h-full flex gap-2">
        <Button
          variant="outline"
          className="w-[100px] bg-blue-950 text-white hover:bg-blue-950 hover:text-white"
          onClick={() => setStep((prev) => prev - 1)}
          disabled={step == 0}
        >
          Back
        </Button>
        <Button
          variant="outline"
          className="w-[100px] bg-blue-950 text-white hover:bg-blue-950 hover:text-white"
          onClick={() => setStep((prev) => prev + 1)}
          disabled={step == 8}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Home;
