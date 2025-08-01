import React from "react";
import Hero from "./Hero";

import Steps from "./Steps";
import Benefits from "./Benefits";
import FAQ from "./FAQ";

const LandingPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Hero />
      <Steps />
      <Benefits />
      <FAQ />
    </div>
  );
};

export default LandingPage;
