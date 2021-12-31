import React from 'react';
import './CalculatorButton.scss';

const CalculatorButton = ({text, onClick}) => {
  return (
      <div className="calc-button">
          <button onClick={onClick}>{text}</button>
      </div>
  )
};

export default CalculatorButton;
