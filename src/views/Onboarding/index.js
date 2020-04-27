import React from "react";
import OnboardingSwipableViews from "../../components/OnboardingSwipableViews";
import ActionButton from "../../components/ActionButton";

export default function OnboardingView({ history }) {
  const handleGoogleLogin = () => {
    //Todo: do google login
    history.push("/completeRegistration");
  };

  return (
    <section id="onboarding">
      <OnboardingSwipableViews />
      <ActionButton
        text="Login with Google"
        onClick={() => handleGoogleLogin()}
      />
    </section>
  );
}
