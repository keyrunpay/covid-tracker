import React from "react";

export default function ActionButton({ text, onClick }) {
  return (
    <div className="login-button-component" onClick={onClick && onClick}>
      <div className="login-btn">{text}</div>
    </div>
  );
}
