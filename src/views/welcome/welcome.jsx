import React from "react";
import WelcomeLogo from "./features/welcome-logo";

// custom imports
import WelcomeWave from "./features/welcome-wave";

const Welcome = () => {
  return (
    <div className="relative flex justify-center h-screen">
      <div className="absolute bottom-0 flex items-center justify-center openingWave">
        <WelcomeLogo />
        <WelcomeWave />
      </div>
    </div>
  );
};

export default Welcome;
