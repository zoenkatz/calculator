import React, { useState, useCallback } from "react";
import "./App.scss";
import CalculatorInput from "./Components/CalculatorInput/CalculatorInput";
import CalculatorButton from "./Components/CalculatorButton/CalculatorButton";

function App() {
  const [CalcButtons] = useState([
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["+", "0", "="],
  ]);

  const [sumState, setSumState] = useState({
    sumToCalc: 0,
    sumToShow: 0
  })

  const onClickCalcButton = useCallback(
      (e) => {
        const targetValue = e.target.textContent;
        switch (targetValue) {
          case "Clear":
            setSumState({
              sumToCalc: 0,
              sumToShow: 0
            });
            break;
          case "=":
            setSumState({...sumState, sumToShow: sumState.sumToCalc});
            break;
          case "+":
            break;
          default:
            setSumState({...sumState, sumToCalc: sumState.sumToCalc + Number(targetValue)});
        }
      },
      [sumState, sumState && sumState.sumToCalc]
  );
  return (
      <div className="App">
        <div className="app-calculator-wrapper">
          <div className="app-calculator-clear">
            <CalculatorButton text="Clear" onClick={onClickCalcButton}/>
          </div>
          <CalculatorInput type="text" isDisabled={true} value={sumState.sumToShow} />
          <div className="app-calculator-buttons">
            {CalcButtons.map((calcButtonRow, indexRow) => {
              return (
                  <div className="app-calculator-button-row" key={indexRow}>
                    {calcButtonRow.map((rowButton, index) => {
                      return (
                          <CalculatorButton
                              key={index}
                              text={rowButton}
                              onClick={onClickCalcButton}
                          />
                      );
                    })}
                  </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}

export default App;
