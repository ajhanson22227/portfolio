import React from "react";
import Welcome from "./components/Welcome/WelcomePage";
import Summary from "./components/Summary/Summary";

const App = () => {
  return (
    <div className="main-container">
      <Welcome />
      <Summary />
    </div>
  );
};

export default App;
