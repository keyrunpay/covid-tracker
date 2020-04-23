import React from "react";
import OnboardingSwipableViews from "./components/OnboardingSwipableViews";

function App() {
  return (
    <div>
      <OnboardingSwipableViews />

      <div className="login-button-component">
        <div className="login-btn">Login With Google</div>
      </div>
    </div>
  );
}

export default App;
