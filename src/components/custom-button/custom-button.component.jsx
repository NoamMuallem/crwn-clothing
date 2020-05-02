import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogeSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${isGoogeSignIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
