import React from "react";
import SecondaryScreenHead from "../../components/SecondaryScreenHead";
import { colors } from "../../utils/color";
import surveyIcon from "../../assets/images/survey.svg";
import TextListItem from "../../components/TextListItem";

export default function SurveyView() {
  return (
    <section id="survey">
      <SecondaryScreenHead
        title="Survey"
        subtitle="Help us filling the form"
        color={colors.purple}
        icon={surveyIcon}
      />
      <div className="wrap">
        <TextListItem text="Survey 1" />
        <TextListItem text="Survey 1" />
        <TextListItem text="Survey 1" />
      </div>
    </section>
  );
}
