import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogeSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogeSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
