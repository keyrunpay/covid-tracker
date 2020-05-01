import React from "react";
import "./style.scss";

export default function ButtonSheet({ visible, onClose, children }) {
  React.useEffect(() => {
    if (visible) document.body.style.overflowY = "hidden";
  }, [visible]);

  const handleClose = () => {
    if (onClose) {
      onClose();
      document.body.style.overflowY = "auto";
    }
  };

  return (
    <React.Fragment>
      {visible && (
        <div className="button-sheet">
          <div className="overlay" onClick={() => handleClose()}></div>
          <div className="contents">{children}</div>
        </div>
      )}
    </React.Fragment>
  );
}

export const ButtonSheetIconButton = ({ icon, color, text, onClick }) => {
  return (
    <div className="button-sheet-btn" onClick={onClick && onClick}>
      <div className="icon-text">
        <div className="shape" style={{ backgroundColor: color }}>
          <img src={icon} alt="" />
        </div>
        <p>{text}</p>
      </div>
      <div className="icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.15833 13.825L10.975 10L7.15833 6.175L8.33332 5L13.3333 10L8.33332 15L7.15833 13.825Z"
            fill="#555555"
          />
        </svg>
      </div>
    </div>
  );
};
