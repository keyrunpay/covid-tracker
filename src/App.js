import React from "react";
import { Switch, Route } from "react-router-dom";
import OnboardingView from "./views/Onboarding";
import CompleteRegistrationView from "./views/CompleteRegistration";
import HomeScreenView from "./views/HomeScreen";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={OnboardingView} />
      <Route
        path="/completeRegistration"
        exact
        component={CompleteRegistrationView}
      />
      <Route path="/home" exact component={HomeScreenView} />
    </Switch>
  );
}

export default App;
