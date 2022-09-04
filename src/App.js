import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  const [currentValue, changeValue] = React.useState(0);

  return (
    <>
      <button onClick={() => changeValue(currentValue + 1)}>+</button>
      {currentValue}
      <button onClick={() => changeValue(currentValue - 1)}>-</button>
      {currentValue}
    </>
  );
}
