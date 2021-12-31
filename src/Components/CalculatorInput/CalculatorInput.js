import React from "react";
import "./CalculatorInput.scss";

const CalculatorInput = ({ type = "text", isDisabled = false, value = 0 }) => {
  return (
    <div className="calc-input">
      <input type={type} disabled={isDisabled} value={value} />
    </div>
  );
};

export default CalculatorInput;
