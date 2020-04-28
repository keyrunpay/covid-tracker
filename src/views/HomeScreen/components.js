import avatarMale from "../../assets/images/avatar-male.png";
import moreDotsIcon from "../../assets/images/more_vert.svg";
import React from "react";

export const AppBar = ({ name }) => {
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

export const StaySafeText = () => {
  return (
    <div className="stay-safe">
      <p>
        Stay Home <br /> Stay Safe
      </p>
    </div>
  );
};

export const IconButton = ({ text, onClick, color, icon }) => {
  return (
    <div className="icon-btn" onClick={onClick && onClick}>
      <div className="shape" style={{ backgroundColor: color }}>
        <img className="pos-center" src={icon} alt="" />
      </div>
      {text && <p>{text}</p>}
    </div>
  );
};
