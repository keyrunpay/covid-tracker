import React from "react";
import { Switch, Route } from "react-router-dom";
import OnboardingView from "./views/Onboarding";
import CompleteRegistrationView from "./views/CompleteRegistration";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={OnboardingView} />
      <Route
        path="/completeRegistration"
        exact
        component={CompleteRegistrationView}
      />
    </Switch>
  );
}

export default App;
