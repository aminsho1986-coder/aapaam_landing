"use client";

import "./loadingButton.scss";

export default function LoadingButton({
  buttonClass,
  isLoading,
  dotsColor,
  onButtonClick,
  children,
}) {
  return (
    <button
      className={
        isLoading
          ? `${buttonClass} button-container loading`
          : `${buttonClass} button-container`
      }
      onClick={onButtonClick}
    >
      <div className="dots-container">
        <div style={{ backgroundColor: dotsColor }}></div>
        <div style={{ backgroundColor: dotsColor }}></div>
        <div style={{ backgroundColor: dotsColor }}></div>
        <div style={{ backgroundColor: dotsColor }}></div>
      </div>
      <span className="label">{children}</span>
    </button>
  );
}
