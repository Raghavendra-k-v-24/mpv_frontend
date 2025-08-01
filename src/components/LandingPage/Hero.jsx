import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Hero_Image from "../../assets/Hero.png";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="h-max w-full flex px-50 xl:px-60 py-10 justify-between bg-blue-50 items-center">
      <div className="h-full w-full flex flex-col gap-2 justify-center">
        <Label className="text-5xl text-blue-900 font-semibold">
          Apply for Your Mortgage Online in Minutes
        </Label>
        <Label className="text-lg text-gray-500">
          Complete the 1003 loan application securely <br />
          and easily.
        </Label>
        <Button
          className="bg-blue-900 mt-5 w-[350px] hover:bg-blue-950"
          onClick={() => navigate("/home")}
        >
          Start Application
        </Button>
      </div>
      <div className="h-full w-full flex justify-center ">
        <img src={Hero_Image} alt="Company Logo" className="h-full w-max" />
      </div>
    </section>
  );
};

export default Hero;
