import React, { useState } from "react";
import "./App.css";
import ResultsComponent from "./components/ResultsComponent";
import KeyInputComponent from "./components/KeyInputComponent";

function App() {
  // setting a new state variable
  const [result, setResult] = useState(0);

  // function Button({ onClick }) {

  const onClick = (button) => {
    if (button === "=") {
      handleClick();
    } else if (button === "back") {
      back();
    } else if (button === "sq") {
      squareRt();
    } else if (button === "clear") {
      reset();
    } else if (button === "round") {
      round();
    } else {
      setResult({
        result: result + button,
      });
    }
  };
  // }

  // calculate
  const handleClick = () => {
    let checkResult = "";
    checkResult = result;

    // does all error handling happen with ty and catch?
    try {
      setResult({
        // eslint-disable-next-line
        result: eval(checkResult),
      });
    } catch (e) {
      setResult({
        result: "error",
      });
    }
  };

  //   reset to zero
  const reset = () => {
    setResult({
      result: "",
    });
  };

  //backspace
  const back = () => {
    setResult({
      result: result.slice(0, -1),
    });
  };

  //square root
  const squareRt = () => {
    setResult({
      result: Math.sqrt(result),
    });
  };

  //round
  const round = () => {
    setResult({
      result: Math.round(result),
    });
  };

  return (
    <div>
      <div className="title">TI-180 Calculator excercise</div>
      <div className="calc">
        <ResultsComponent result={result} />
        <KeyInputComponent
          onClick={onClick}
          result={result}
          setResult={setResult}
        />
      </div>
    </div>
  );
}

export default App;
