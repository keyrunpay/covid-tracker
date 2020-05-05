import React from "react";
import "./style.scss";
import arrowIcon from "../../assets/images/arrow_back.svg";
import IconButton from "../IconButton";
import { withRouter } from "react-router-dom";

const SecondaryScreenNav = ({ history }) => {
  return (
    <div className="sec-screen-nav">
      <img src={arrowIcon} onClick={() => history.push("/home")} alt="" />
    </div>
  );
};

function SecondaryScreenHead({ color, icon, title, subtitle, history }) {
  return (
    <div className="sec-screen-head">
      <div className="gap x2"></div>
      <div className="wrap">
        <SecondaryScreenNav history={history} />
        <div className="gap"></div>
        <header className="flex ci">
          <IconButton small color={color} icon={icon} />
          <div className="desc">
            <p className="title">{title}</p>
            <div className="sub-title">{subtitle}</div>
          </div>
        </header>
      </div>
      <div className="gap x2"></div>
    </div>
  );
}

export default withRouter(SecondaryScreenHead);
