import { Label } from "@/components/ui/label";
import StepInfo from "./StepInfo";

const Steps = () => {
  return (
    <section className="h-max w-full flex flex-col px-50 xl:px-60 py-10 gap-10">
      <div className="h-max w-full flex justify-center">
        <Label className="text-3xl font-medium">How It Works</Label>
      </div>
      <div className="h-max w-full flex justify-center gap-5">
        <StepInfo
          stepNumber={1}
          stepInformation={
            "Fill Out 1003 form Online or upload if you have a prefilled one"
          }
        />
        <StepInfo
          stepNumber={2}
          stepInformation={"Submit Supporting Documents"}
        />
        <StepInfo
          stepNumber={3}
          stepInformation={"Speak with various vendors"}
        />
        <StepInfo
          stepNumber={4}
          stepInformation={"Finalize and enter your dream home"}
        />
      </div>
    </section>
  );
};

export default Steps;
