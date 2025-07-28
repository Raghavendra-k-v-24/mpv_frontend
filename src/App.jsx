import Header from "./components/Header";
import { Toaster } from "@/components/ui/sonner";

// index.js or App.js
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import Hero from "./components/LandingPage/Hero";
import { Separator } from "@/components/ui/separator";
import Steps from "./components/LandingPage/Steps";
import Benefits from "./components/LandingPage/Benefits";
import FAQ from "./components/LandingPage/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-full w-full flex flex-col pt-5">
      <Header />
      <Separator />
      <Hero />
      <Steps />
      <Benefits />
      <FAQ />
      <Footer />
      <Toaster richColors />
    </div>
  );
}

export default App;
