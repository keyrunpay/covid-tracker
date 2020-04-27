import React from "react";
import avatarMale from "../../assets/images/avatar-male.png";
import moreDotsIcon from "../../assets/images/more_vert.svg";

import phoneIcon from "../../assets/images/phone-call.svg";
import newsIcon from "../../assets/images/bullhorn.svg";
import chatIcon from "../../assets/images/message.svg";
import moreIcon from "../../assets/images/Group.svg";
import { colors } from "../../utils/color";

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
      </div>
    </section>
  );
}

const AppBar = ({ name }) => {
  return (
    <div className="app-bar">
      <div className="flex jcsb ci">
        <div className="left flex ci">
          <img src={avatarMale} alt="" />
          <p>Hello {name}</p>
        </div>
        <div className="right">
          <img src={moreDotsIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

const StaySafeText = () => {
  return (
    <div className="stay-safe">
      <p>
        Stay Home <br /> Stay Safe
      </p>
    </div>
  );
};

const IconButton = ({ text, onClick, color, icon }) => {
  return (
    <div className="icon-btn" onClick={onClick && onClick}>
      <div className="shape" style={{ backgroundColor: color }}>
        <img className="pos-center" src={icon} alt="" />
      </div>
      {text && <p>{text}</p>}
    </div>
  );
};
