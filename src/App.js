import React, { useRef } from "react";
import Welcome from "./components/Welcome/WelcomePage";
import Summary from "./components/Summary/Summary";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

const App = () => {
  const aboutRef = useRef();
  // const projectRef = useRef();
  // const contactRef = useRef();

  const ScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="main-container">
      <Welcome aboutRef={aboutRef} ScrollTo={ScrollTo} />
      <Summary aboutRef={aboutRef} ScrollTo={ScrollTo} />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
