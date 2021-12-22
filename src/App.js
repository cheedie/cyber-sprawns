import "./index.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Battle from "./Components/Battle";
import Marketplace from "./Components/Marketplace";
import More from "./Components/More";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  const timeline = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <NavBar />
      <Home />
      <About timeline={timeline} />
      <Battle />
      <Marketplace />
      <More />
    </>
  );
}

export default App;
