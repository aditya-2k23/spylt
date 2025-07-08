import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import { ScrollTrigger } from "gsap/all";
import Message from "./sections/Message";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Message />
      <Message />
      <div className="h-dvh border border-red-500"></div>
    </main>
  );
};

export default App;
