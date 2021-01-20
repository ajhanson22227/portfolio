import React, { useRef, useState, useEffect } from "react";
import Welcome from "./components/Welcome/WelcomePage";
import Summary from "./components/Summary/Summary";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();
  const welcomeRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset >= window.innerHeight - 20
        ? setIsScrolled(true)
        : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="main-container">
      <Welcome
        welcomeRef={welcomeRef}
        aboutRef={aboutRef}
        ScrollTo={ScrollTo}
      />
      {isScrolled && (
        <Navbar
          welcomeRef={welcomeRef}
          aboutRef={aboutRef}
          projectRef={projectRef}
          contactRef={contactRef}
          ScrollTo={ScrollTo}
        />
      )}
      <Summary aboutRef={aboutRef} />
      <Project projectRef={projectRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default App;
