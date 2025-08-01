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
import { Separator } from "@/components/ui/separator";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import { Outlet } from "react-router";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="h-full w-full flex flex-col pt-5">
      <ScrollToTop />
      <Header />
      <Separator />
      <Outlet />
      <Footer />
      <Toaster richColors />
    </div>
  );
}

export default App;
