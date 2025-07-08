import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh border border-red-500"></div>
    </main>
  );
};

export default App;
