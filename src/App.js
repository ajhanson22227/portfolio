import React from "react";
import Welcome from "./components/Welcome/WelcomePage";
import Summary from "./components/Summary/Summary";
import Project from "./components/Project/Project";

const App = () => {
  return (
    <div className="main-container">
      <Welcome />
      <Summary />
      <Project />
    </div>
  );
};

export default App;
