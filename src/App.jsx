import React from "react";
import "./index.css";

function App() {
  return (
    <>
      <ul>
        <li>Sum of two number: {Add(40, 4)}</li>
        <li>Sub of two number: {Sub(30, 3)}</li>
        <li>Mul of two number: {Mul(40, 4)}</li>
        <li>Div of two number: {Div(40, 3)}</li>
      </ul>

      <Heading />
      {/* <Para />
      <List /> */}
    </>
  );
}

export default App;
