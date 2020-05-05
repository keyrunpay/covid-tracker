import React from "react";
import { Switch, Route } from "react-router-dom";
import OnboardingView from "./views/Onboarding";
import CompleteRegistrationView from "./views/CompleteRegistration";
import HomeScreenView from "./views/HomeScreen";
import SurveyView from "./views/Survey";
import ReportView from "./views/Report";
import NoticeView from "./views/Notice";
import EventView from "./views/Event";
import NewsView from "./views/News";

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
      <Route path="/survey" exact component={SurveyView} />
      <Route path="/report" exact component={ReportView} />
      <Route path="/notice" exact component={NoticeView} />
      <Route path="/event" exact component={EventView} />
      <Route path="/news" exact component={NewsView} />
    </Switch>
  );
}

export default App;
