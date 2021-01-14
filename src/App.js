import React from "react";
import Welcome from "./components/Welcome/WelcomePage";
import Personal from "./components/Summary/Personal/Personal";

const App = () => {
  return (
    <div className="main-container">
      <Welcome />
      <Personal />
    </div>
  );
};

export default App;
