import React from "react";
import SecondaryScreenHead from "../../components/SecondaryScreenHead";
import { colors } from "../../utils/color";
import noticeIcon from "../../assets/images/bell.svg";
import TextListItem from "../../components/TextListItem";

export default function NoticeView() {
  return (
    <section id="notice">
      <SecondaryScreenHead
        title="Notices"
        subtitle="Help us filling the form"
        color={colors.blue}
        icon={noticeIcon}
      />
      <div className="wrap">
        <TextListItem text="Notice 1" />
        <TextListItem text="Notice 1" />
        <TextListItem text="Notice 1" />
      </div>
    </section>
  );
}
