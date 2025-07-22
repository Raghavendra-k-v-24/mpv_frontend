import Body from "./components/Body";
import Header from "./components/Header";
import Titlebar from "./components/Titlebar";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="h-screen w-full flex flex-col ">
      <div className="w-full bg-yellow-400 text-black text-center py-1 font-semibold tracking-wide">
        🚧 Proof of Concept - Not for Production Use 🚧
      </div>

      <Header />
      <Titlebar />

      <Body />
      <Toaster richColors />
    </div>
  );
}

export default App;
