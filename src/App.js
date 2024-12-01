import React, { useState } from "react";
import ButtonsContainer from "./components/ButtonsContainer";
import DisplayContainer from "./components/DisplayContainer";
import "./styles.css";

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  function handleClick(e) {
    const targetValue = e.target.name;
    setDisplay(display + targetValue);
  }

  function operatorClick(operator) {
    const lastCharacter = display.slice(-1);
    if (display === "" || ["+", "-", "*", "/"].includes(lastCharacter)) return;
    setDisplay((prevDisplay) => `${prevDisplay} ${operator} `);
  }

  function handleEqual() {
    if (["+", "-", "*", "/"].includes(display.slice(-1))) {
      setDisplay("Error");
      return;
    }
    try {
      const sanitizedExpression = display.replace(/ /g, "");
      const resultValue = eval(sanitizedExpression); // Ensure input sanitization
      setResult(resultValue.toString());
    } catch (error) {
      setDisplay("Error");
    }
  }

  function clear() {
    setDisplay("");
    setResult("");
  }

  function backspace() {
    const lastChar = display.slice(-1);
    if (lastChar === " ") {
      setDisplay(display.slice(0, -3));
    } else {
      setDisplay(display.slice(0, -1));
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <DisplayContainer
          display={display}
          result={result}
          backspace={backspace}
          clear={clear}
        />
        <ButtonsContainer
          operatorClick={operatorClick}
          handleClick={handleClick}
          handleEqual={handleEqual}
        />
        <p className="text-white">Created by Kush Nagar</p>
      </div>
    </div>
  );
}

export default App;
