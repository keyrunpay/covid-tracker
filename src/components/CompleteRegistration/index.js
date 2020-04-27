import React from "react";
import detailsImage from "../../assets/images/details.svg";
import arrowIcon from "../../assets/images/arrow_right.svg";

export default function CompleteRegistration() {
  return (
    <div className="swipable-item">
      <img src={detailsImage} alt="" />
      <div className="gap"></div>
      <h3 className="title">Few More Details</h3>

      <input type="text" placeholder="Phone Number" />
      <div className="gap x2"></div>
      <div className="select-field">
        <select name="gender" placeholder="Select Gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <img className="icon" src={arrowIcon} alt="" />
      </div>
    </div>
  );
}
