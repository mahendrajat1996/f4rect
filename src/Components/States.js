import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare, FaDivide } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "../style.css";
function States() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
    setError("");
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
    setError("");
  };

  const performOperation = (op) => {
    if (!num1 || !num2 || isNaN(Number(num1)) || isNaN(Number(num2))) {
      setError("Num can't be empty.");
      setResult("");
    } else {
      setError("");
      setOperation(op);
      calculateResult(op);
    }
  };

  const calculateResult = (op) => {
    let resultValue = "";

    if (op === "+") {
      resultValue = Number(num1) + Number(num2);
    } else if (op === "-") {
      resultValue = Number(num1) - Number(num2);
    } else if (op === "*") {
      resultValue = Number(num1) * Number(num2);
    } else if (op === "/") {
      resultValue = Number(num1) / Number(num2);
    }

    setResult(resultValue);
  };

  return (
    <div class="section">
      <h1 style={{ textAlign: "center" }}>React Calculator</h1>
      <div class="inputField">
        <input
          type="text"
          placeholder="Num 1"
          value={num1}
          onChange={handleNum1Change}
        />
        <input
          type="text"
          placeholder="Num 2"
          value={num2}
          onChange={handleNum2Change}
        />
      </div>
      <div class="btn">
        <button onClick={() => performOperation("+")}>
          <FaPlusSquare />
        </button>
        <button onClick={() => performOperation("-")}>
          <FaMinusSquare />
        </button>
        <button onClick={() => performOperation("*")}>
          <ImCross />
        </button>
        <button onClick={() => performOperation("/")}>
          <FaDivide />
        </button>
      </div>
      {error && (
        <div style={{ paddingTop: "30px" }}>
          <p style={{ color: "red", textAlign: "center" }}>ERROR !</p>
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        </div>
      )}
      {result && (
        <div style={{ paddingTop: "30px" }}>
          <p style={{ color: "blue", textAlign: "center" }}>SUCCESS! </p>
          <p style={{ color: "green", textAlign: "center" }}>
            Result: YOUR RESULT HERE ! {result}
          </p>
        </div>
      )}
    </div>
  );
}

export default States;