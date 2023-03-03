import React from "react";
import "./button.css";

const Button = (props) => {
  // props ek object hai
  // de-structuring props object and collecting it into different objects.
  const { btnType, btnText, btnClick, customClass } = props;
  // jab mai button type ko primary du ,tab uska class kya ho
  // aur agar button type primary na ho to - mere button ka class kya ho.
  // use ternary operator.

  return (
    <div
      className={`${
        btnType === "PRIMARY"
          ? ` button primary-btn ${customClass}`
          : `  button secondary-btn ${customClass}`
      } `}
      onClick={btnClick}
    >
      {btnText}
    </div>
  );
};

export default Button;
