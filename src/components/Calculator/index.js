import React, { useState } from "react";
import "./style.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [numError, setNumError] = useState(false);

  function validate(e) {
    if (num1 === "" || num2 === "") {
      setError(true);
      setSuccess(false);
    } else if (isNaN(num1) || isNaN(num2)) {
      setNumError(true);
      setError(false);
      setSuccess(false);
    } else {
      setNum1(parseInt(num1));
      setNum2(parseInt(num2));
      let btnValue = e.target.innerText;
      calculate(btnValue);
      setSuccess(true);
      setError(false);
      setNumError(false);
      setNum1("");
      setNum2("");
    }
  }

  function calculate(value) {
    if (value === "+") {
      setResult(parseInt(num1) + parseInt(num2));
    } else if (value === "-") {
      setResult(num1 - num2);
    } else if (value === "*") {
      setResult(num1 * num2);
    } else if (value === "/") {
      setResult(num1 / num2);
    } else {
      return;
    }
  }

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input
        type="text"
        value={num1}
        onInput={(e) => setNum1(e.target.value)}
        placeholder="Num 1"
      />
      <input
        type="text"
        value={num2}
        onInput={(e) => setNum2(e.target.value)}
        placeholder="Num 2"
      />
      <div className="btnWrapper">
        <button onClick={(e) => validate(e)}>+</button>
        <button onClick={(e) => validate(e)}>-</button>
        <button onClick={(e) => validate(e)}>*</button>
        <button onClick={(e) => validate(e)}>/</button>
      </div>
      {success ? <p>Result = {result}</p> : ""}
      {success ? (
        <p className="success">Success : Your result is shown above!</p>
      ) : (
        ""
      )}
      {error ? <p className="error">Error : Num cannot be empty</p> : ""}
      {numError ? (
        <p className="error">Error : Input should be a number only</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Calculator;
