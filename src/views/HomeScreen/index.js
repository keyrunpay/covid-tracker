import React from "react";
import phoneIcon from "../../assets/images/phone-call.svg";
import newsIcon from "../../assets/images/bullhorn.svg";
import chatIcon from "../../assets/images/message.svg";
import moreIcon from "../../assets/images/Group.svg";
import knowMoreImage from "../../assets/images/know_more.png";
import { colors } from "../../utils/color";
import { AppBar, StaySafeText, IconButton } from "./components";

export default function HomeScreenView() {
  return (
    <section id="home-screen">
      <div className="wrap">
        <AppBar name="Guest" />
        <StaySafeText />
        <div className="gap x2"></div>
        <div className="flex jcsb">
          <IconButton icon={phoneIcon} text="Contacts" color={colors.blue} />
          <IconButton icon={newsIcon} text="News" color={colors.orange} />
          <IconButton icon={chatIcon} text="Chat" color={colors.purple} />
          <IconButton icon={moreIcon} text="More" color={colors.yellow} />
        </div>
        <div className="gap x2"></div>
        <KnowMore />
      </div>
    </section>
  );
}

const KnowMore = () => {
  return (
    <div className="know-more">
      <div className="contents">
        <p>All you need to know about coronavirus!</p>
        <button className="btn-know-more">Know More</button>
      </div>
      <div className="ilustration">
        <img src={knowMoreImage} alt="" />
      </div>
    </div>
  );
};
