import React from "react";
import SecondaryScreenHead from "../../components/SecondaryScreenHead";
import { colors } from "../../utils/color";
import reportIcon from "../../assets/images/report.svg";
import TextListItem from "../../components/TextListItem";

export default function ReportView() {
  return (
    <section id="report">
      <SecondaryScreenHead
        title="Report"
        subtitle="Help us filling the form"
        color={colors.orange}
        icon={reportIcon}
      />
      <div className="wrap">
        <TextListItem text="Report 1" />
        <TextListItem text="Report 1" />
        <TextListItem text="Report 1" />
      </div>
    </section>
  );
}
