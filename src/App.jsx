import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";
import "./index.css";
import { Add, Sub, Mul, Div } from "./Calc";

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
